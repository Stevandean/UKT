const models = require('../../models/index');
const ukt_siswa = models.ukt_siswa;

const { Op } = require("sequelize");

module.exports = {
    controllerGetAll: async (req, res) => {
        ukt_siswa.findAll()
            .then(ukt_siswa => {
                res.json({
                    count: ukt_siswa.length,
                    data: ukt_siswa
                })
            })
            .catch(error => {
                res.json({
                    message: error.message
                })
            })
    },
    controllerGetByEventFiltered: async (req, res) => {
        const { jenis, updown } = req.params;
        let orderCriteria = [];

        switch (jenis) {
            case 'senam':
                orderCriteria.push(['senam', updown === 'downToUp' ? 'ASC' : 'DESC']);
                break;
            case 'jurus':
                orderCriteria.push(['jurus', updown === 'downToUp' ? 'ASC' : 'DESC']);
                break;
            case 'fisik':
                orderCriteria.push(['fisik', updown === 'downToUp' ? 'ASC' : 'DESC']);
                break;
            case 'teknik':
                orderCriteria.push(['teknik', updown === 'downToUp' ? 'ASC' : 'DESC']);
                break;
            case 'sambung':
                orderCriteria.push(['sambung', updown === 'downToUp' ? 'ASC' : 'DESC']);
                break;
            case 'keshan':
                orderCriteria.push(['keshan', updown === 'downToUp' ? 'ASC' : 'DESC']);
                break;
            case 'all':
                orderCriteria.push([
                    Sequelize.literal('(COALESCE(senam, 0) + COALESCE(jurus, 0) + COALESCE(fisik, 0) + COALESCE(teknik, 0) + COALESCE(sambung, 0) + COALESCE(keshan, 0))/6'),
                    updown === 'downToUp' ? 'ASC' : 'DESC'
                ]);
                break;
            default:
                // handle invalid jenis value
                res.status(400).send('Invalid jenis value');
                return;
        }
        ukt_siswa.findAll({
            include: [
                {
                    model: models.siswa,
                    as: "siswa_ukt_siswa",
                    attributes: ['name', 'tingkatan', "nomor_urut"],
                    include: [
                        {
                            model: models.ranting,
                            as: "siswa_ranting",
                            attributes: ['name'],
                        }
                    ]
                }
            ],
            where: {
                id_event: req.params.event,
            },
            order: orderCriteria
        })
            .then(ukt_siswa => {
                res.json({
                    count: ukt_siswa.length,
                    data: ukt_siswa
                })
            })
            .catch(error => {
                res.json({
                    message: error.message
                })
            })
    },
    controllerGetByEvent: async (req, res) => {
        const rantings = req.body.ranting || []
        ukt_siswa.findAll({
            include: [
                {
                    model: models.siswa,
                    as: "siswa_ukt_siswa",
                    attributes: ['name', 'tingkatan', "nomor_urut"],
                    where: {
                        id_ranting: {
                            [Op.in]: rantings
                        }
                    },
                    include: [
                        {
                            model: models.ranting,
                            as: "siswa_ranting",
                            attributes: ['name'],
                        }
                    ]
                }
            ],
            where: {
                id_event: req.params.event,
            },
        })
            .then(ukt_siswa => {
                res.json({
                    count: ukt_siswa.length,
                    data: ukt_siswa
                })
            })
            .catch(error => {
                res.json({
                    message: error.message
                })
            })
    },
    controllerStatistics: async (req, res) => {

        ukt_siswa.findAll({
            attributes: ['keshan', 'senam', 'jurus', 'fisik', 'teknik', 'sambung']
        })
            .then(result => {
                const attributes = ['keshan', 'senam', 'jurus', 'fisik', 'teknik', 'sambung'];


                // Process the data into the desired format
                const data = []

                for (let i = 0; i < 6; i++) {
                    const subData = {}
                    const percentages = {};
                    const attribute = attributes[i];
                    let redCount = 0;
                    let yellowCount = 0;
                    let greenCount = 0;
                    result.map(item => {
                        for (let b = 0; b < result.length; b++) {
                            const value = item[attribute]

                            if (value < 50) {
                                redCount++;
                            } else if (value > 80) {
                                greenCount++;
                            } else {
                                yellowCount++;
                            }
                        }
                    })
                    percentages.red = Math.round((redCount / result.length) * 100 * 100 / result.length) / 100;
                    percentages.yellow = Math.round((yellowCount / result.length) * 100 * 100 / result.length) / 100;
                    percentages.green = Math.round((greenCount / result.length) * 100 * 100 / result.length) / 100;
                    subData.name = attributes[i];
                    subData.percentages = percentages;
                    data.push(subData)
                    console.log(redCount)
                    console.log(yellowCount)
                    console.log(greenCount)
                }

                res.json({
                    // count: data.length,
                    data: data
                })
            })
            .catch(error => {
                res.json({
                    message: error.message
                })
            })
    },
    controllerGetByEventUkt: async (req, res) => {
        let orderCriteria = [[Sequelize.literal('(COALESCE(senam, 0) + COALESCE(jurus, 0) + COALESCE(fisik, 0) + COALESCE(teknik, 0) + COALESCE(sambung, 0) + COALESCE(keshan, 0))/6'), 'DESC']];

        ukt_siswa.findAll({
            where: {
                tipe_ukt: req.params.ukt,
                id_event: req.params.event
            },
            include: [
                {
                    model: models.siswa,
                    as: "siswa_ukt_siswa",
                    attributes: ['name', 'tingkatan', "nomor_urut"],
                    include: [
                        {
                            model: models.ranting,
                            as: "siswa_ranting",
                            attributes: ['name']
                        }
                    ]
                }
            ],
            order: orderCriteria
        })
            .then(ukt_siswa => {
                res.json({
                    count: ukt_siswa.length,
                    data: ukt_siswa
                })
            })
            .catch(error => {
                res.json({
                    message: error.message
                })
            })
    },
    controllerGetByIdSiswa: async (req, res) => {
        ukt_siswa.findOne({
            where: {
                id_siswa: req.params.id
            },
            order: []
        })
            .then(ukt_siswa => {
                res.json({
                    data: ukt_siswa
                })
            })
            .catch(error => {
                res.json({
                    message: error.message
                })
            })
    },
    controllerAdd: async (req, res) => {
        let data = {
            tipe_ukt: req.body.tipe_ukt,
            id_event: req.body.id_event,
            id_siswa: req.body.id_siswa,
            rayon: req.body.rayon,
            keshan: req.body.keshan,
            senam: req.body.senam,
            jurus: req.body.jurus,
            fisik: req.body.fisik > 100 ? 100 : req.body.fisik,
            teknik: req.body.teknik,
            sambung: req.body.sambung
        }
        console.log("ini data data");
        console.log(data);
        ukt_siswa.create(data)
            .then(result => {
                res.json({
                    message: "data has been inserted",
                    data: result
                })
            })
            .catch(error => {
                res.json({
                    message: error.message
                })
            })
    },
    controllerEdit: async (req, res) => {
        let param = {
            id_ukt_siswa: req.params.id
        }
        let data = {
            tipe_ukt: req.body.tipe_ukt,
            id_event: req.body.id_event,
            id_siswa: req.body.id_siswa,
            rayon: req.body.rayon,
            keshan: req.body.keshan,
            senam: req.body.senam,
            jurus: req.body.jurus,
            fisik: req.body.fisik > 100 ? 100 : req.body.fisik,
            teknik: req.body.teknik,
            sambung: req.body.sambung
        }
        ukt_siswa.update(data, { where: param })
            .then(result => {
                res.json({
                    message: "data has been updated"
                })
            })
            .catch(error => {
                res.json({
                    message: error.message
                })
            })
    },
    controllerDelete: async (req, res) => {
        let param = {
            id_ukt_siswa: req.params.id
        }
        ukt_siswa.destroy({ where: param })
            .then(result => {
                res.json({
                    massege: "data has been deleted"
                })
            })
            .catch(error => {
                res.json({
                    message: error.message
                })
            })
    },
}