const models = require('../../models/index');
const ukt_siswa = models.ukt_siswa;

const { Sequelize, Op, or } = require("sequelize");

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
    controllerGetTotalPage: async (req, res) => {
        const limit = Number(req.params.limit);
        ukt_siswa.findAll({
            where: {
                id_event: req.params.id
            },
            attributes: ['id_ukt_siswa']
        })
            .then(result => {
                const totalPages = Math.ceil(result.length / limit);
                res.json({ totalPages });
            })
            .catch(error => {
                res.json({
                    message: error.message
                })
            })
    },
    controllerGetByEventFiltered: async (req, res) => {
        const { jenis, updown, page, limit } = req.params;
        const rantings = req.body.ranting || ['BENDUNGAN', 'DONGKO', 'DURENAN', 'GANDUSARI', 'KAMPAK', 'KARANGAN', 'MUNJUNGAN', 'PANGGUL', 'POGALAN', 'PULE', 'SURUH', 'TRENGGALEK', 'TUGU', 'WATULIMO']
        let orderCriteria = [];
        console.log(page)
        console.log(limit)

        const pageNumber = Number(page); // Replace with the actual 
        const itemsPerPage = Number(limit); // 

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
        // const page = page // Get the page number from the request query parameter (default: 1)
        // const limit = limit // Get the limit (number of items per page) from the request query parameter (default: 10)
        const offset = (pageNumber - 1) * itemsPerPage; // Calculate the offset based on the page number and limit

        ukt_siswa.findAll({
            include: [
                {
                    model: models.siswa,
                    as: "siswa_ukt_siswa",
                    attributes: ['name', 'tingkatan', 'nomor_urut'],
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
            order: orderCriteria,
            limit: itemsPerPage,
            offset: offset
        })
            .then(ukt_siswa => {
                res.json({
                    count: ukt_siswa.length,
                    data: ukt_siswa
                });
            })
            .catch(error => {
                res.json({
                    message: error.message
                });
            });
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


                const data = []
                let allRedCount = 0;
                let allYellowCount = 0;
                let allGreenCount = 0;
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
                                allRedCount++;
                                redCount++;
                            } else if (value > 80) {
                                allGreenCount++;
                                greenCount++;
                            } else {
                                allYellowCount++;
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
                }
                const average = {}
                const percentages = {}
                percentages.red = Math.round((allRedCount / result.length) * 100 * 100 / result.length / 6) / 100;
                percentages.yellow = Math.round((allYellowCount / result.length) * 100 * 100 / result.length / 6) / 100;
                percentages.green = Math.round((allGreenCount / result.length) * 100 * 100 / result.length / 6) / 100;

                average.name = 'rata - rata';
                average.percentages = percentages;
                data.push(average);

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
    controllerStatisticsRanting: async (req, res) => {
        const attributes = ['keshan', 'senam', 'jurus', 'fisik', 'teknik', 'sambung']
        const param = req.params.id

        ukt_siswa.findAll({
            attributes: attributes,
            include: [
                {
                    model: models.siswa,
                    as: "siswa_ukt_siswa",
                    attributes: ['id_ranting'],
                }
            ],
            where: {
                "$siswa_ukt_siswa.id_ranting$": param
            }
        })
            .then(result => {
                const data = []
                let allRedCount = 0;
                let allYellowCount = 0;
                let allGreenCount = 0;
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
                                allRedCount++;
                                redCount++;
                            } else if (value > 80) {
                                allGreenCount++;
                                greenCount++;
                            } else {
                                allYellowCount++;
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
                }
                const average = {}
                const percentages = {}
                percentages.red = Math.round((allRedCount / result.length) * 100 * 100 / result.length / 6) / 100;
                percentages.yellow = Math.round((allYellowCount / result.length) * 100 * 100 / result.length / 6) / 100;
                percentages.green = Math.round((allGreenCount / result.length) * 100 * 100 / result.length / 6) / 100;

                average.name = 'rata - rata';
                average.percentages = percentages;
                data.push(average);

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
    controllerStatisticsCabang: async (req, res) => {
        const attributes = ['keshan', 'senam', 'jurus', 'fisik', 'teknik', 'sambung']
        const param = req.params.id
        const cabang = models.cabang;
        cabang.findOne({
            include: [
                {
                    model: models.ranting,
                    as: "cabang_ranting",
                    attributes: ['id_ranting']
                }
            ],
            where: {
                id_cabang: param
            }
        })
            .then(result => {
                const data = []
                for (let i = 0; i < result.cabang_ranting.length; i++) {
                    data.push(result.cabang_ranting[i].id_ranting)
                }
                // console.log(result.cabang_ranting.id_ranting);
                ukt_siswa.findAll({
                    attributes: attributes,
                    include: [
                        {
                            model: models.siswa,
                            as: "siswa_ukt_siswa",
                            attributes: ['id_ranting'],
                            where: {
                                id_ranting: data
                            }
                        }
                    ],
                })
                    .then(result => {
                        // Process the data into the desired format
                        const data = [];
                        let allRedCount = 0;
                        let allYellowCount = 0;
                        let allGreenCount = 0;
                        for (let i = 0; i < 6; i++) {
                            const subData = {};
                            const percentages = {};
                            const attribute = attributes[i];
                            let redCount = 0;
                            let yellowCount = 0;
                            let greenCount = 0;
                            result.map(item => {
                                for (let b = 0; b < result.length; b++) {
                                    const value = item[attribute];
                                    if (value < 50) {
                                        allRedCount++;
                                        redCount++;
                                    } else if (value > 80) {
                                        allGreenCount++;
                                        greenCount++;
                                    } else {
                                        allYellowCount++;
                                        yellowCount++;
                                    }
                                }
                            });
                            percentages.red = Math.round((redCount / result.length) * 100 * 100 / result.length) / 100;
                            percentages.yellow = Math.round((yellowCount / result.length) * 100 * 100 / result.length) / 100;
                            percentages.green = Math.round((greenCount / result.length) * 100 * 100 / result.length) / 100;
                            subData.name = attributes[i];
                            subData.percentages = percentages;
                            subData.average = (redCount + yellowCount + greenCount) / 3; // Calculate the average
                            data.push(subData);
                        }
                        const average = {}
                        const percentages = {}
                        percentages.red = Math.round((allRedCount / result.length) * 100 * 100 / result.length / 6) / 100;
                        percentages.yellow = Math.round((allYellowCount / result.length) * 100 * 100 / result.length / 6) / 100;
                        percentages.green = Math.round((allGreenCount / result.length) * 100 * 100 / result.length / 6) / 100;

                        average.name = 'rata - rata';
                        average.percentages = percentages;
                        data.push(average);
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