const models = require('../../../../models/index');
const teknik_detail = models.teknik_detail;

module.exports = {
    controllerGetAll: async (req, res) => {
        teknik_detail.findAll()
            .then(teknik_detail => {
                res.json({
                    count: teknik_detail.length,
                    data: teknik_detail
                })
            })
            .catch(error => {
                res.json({
                    message: error.message
                })
            })
    },
    controllerGetByTipeUkt: async (req, res) => {
        teknik_detail.findAll({
            where: {
                tipe_ukt: req.params.id
            },
            attributes: ['id_teknik_detail', 'id_penguji', 'id_event', 'id_siswa', 'tipe_ukt'],
            include: [
                {
                    model: models.siswa,
                    attributes: ['name'],
                    as: "teknik_siswa",
                },
                {
                    model: models.penguji,
                    attributes: ['name'],
                    as: "penguji_teknik"
                },
                {
                    model: models.teknik_siswa,
                    attributes: ['id_teknik', 'predikat'],
                    as: "siswa_teknik_detail",
                    include: [
                        {
                            model: models.teknik,
                            attributes: ['name'],
                            as: "siswa_teknik",
                        }
                    ],
                    order: [['id_teknik', 'ASC']]
                }
            ],
        })
            .then(teknik => {
                res.json({
                    count: teknik.length,
                    data: teknik
                })
            })
            .catch(error => {
                res.json({
                    message: error.message
                })
            })
    },
    controllerGetByUktEvent: async (req, res) => {
        teknik_detail.findAll({
            where: {
                tipe_ukt: req.params.id,
                id_event: req.params.event
            },
            attributes: ['id_teknik_detail', 'id_penguji', 'id_event', 'id_siswa', 'tipe_ukt'],
            include: [
                {
                    model: models.siswa,
                    attributes: ['name', 'nomor_urut'],
                    as: "teknik_siswa",
                },
                {
                    model: models.penguji,
                    attributes: ['name'],
                    as: "penguji_teknik"
                },
                {
                    model: models.teknik_siswa,
                    attributes: ['id_teknik', 'predikat'],
                    as: "siswa_teknik_detail",
                    include: [
                        {
                            model: models.teknik,
                            attributes: ['id_teknik', 'name'],
                            as: "siswa_teknik",
                        }
                    ],
                    order: [['id_teknik', 'DESC']]
                }
            ],
        })
            .then(teknik => {
                res.json({
                    count: teknik.length,
                    data: teknik
                })
            })
            .catch(error => {
                res.json({
                    message: error.message
                })
            })
    },
    controllerGetByIdSiswa: async (req, res) => {
        teknik_detail.findAll({
            attributes: ['id_teknik_detail', 'id_siswa', 'id_teknik', 'predikat'],
            where: {
                id_siswa: req.params.id
            },
            include: [
                {
                    model: models.teknik,
                    attributes: ['name', 'tipe_ukt'],
                    as: "siswa_teknik",
                    required: false
                }
            ]
        })
            .then(teknik => {
                console.log(teknik[0].predikat)
                const nilai = []
                for (let i = 0; i < teknik.length; i++) {
                    if (teknik[i].predikat == true) {
                        nilai.push('true');
                    }
                }
                console.log(nilai.length);
                res.json({
                    count: teknik.length,
                    teknik_benar: nilai.length,
                    data: teknik
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
            id_penguji: req.body.id_penguji,
            id_event: req.body.id_event,
            id_siswa: req.body.id_siswa,
            tipe_ukt: req.body.tipe_ukt
        }
        teknik_detail.create(data)
            .then(result => {
                res.json({
                    message: "data has been inserted",
                    data: result,
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
            id_teknik_detail: req.params.id
        }
        let data = {
            id_penguji: req.body.id_penguji,
            id_event: req.body.id_event,
            tipe_ukt: req.body.tipe_ukt,
            name: req.body.name
        }
        teknik_detail.update(data, { where: param })
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
            id_teknik_detail: req.params.id
        }
        teknik_detail.destroy({ where: param })
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