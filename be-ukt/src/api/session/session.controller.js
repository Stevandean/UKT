const models = require('../../models/index');
const session = models.session;

module.exports = {
    controllerGetAll: async (req, res) => {
        session.findAll()
            .then(session => {
                res.json({
                    count: session.length,
                    data: session
                })
            })
            .catch(error => {
                res.json({
                    message: error.message
                })
            })
    },
    controllerGetByEvent: async (req, res) => {
        session.findAll({
            where: {
                id_event: req.params.event
            },
            include: [
                {
                    model: models.siswa,
                    attributes: ['name', 'nomor_urut'],
                    as: "keshan_siswa",
                },
                {
                    model: models.lembar_jawaban,
                    as: "lembar_jawaban",
                    include: [
                        {
                            model: models.soal,
                            as: 'soal_ujian'
                        }
                    ]
                }
            ]
        })
            .then(session => {
                res.json({
                    count: session.length,
                    data: session
                })
            })
            .catch(error => {
                res.json({
                    message: error.message
                })
            })
    },
    controllerGetById: async (req, res) => {
        let param = {
            id_lembar_soal: req.body?.id_lembar_soal,
            id_siswa: req.body.id_siswa
        }
        session.findOne({ where: param })
            .then(session => {
                res.json({
                    count: session.length,
                    data: session
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
            id_lembar_soal: req.body.id_lembar_soal,
            id_siswa: req.body.id_siswa,
            id_event: req.body.id_event,
            nilai: req.body.nilai,
            waktu_pengerjaan: req.body.waktu_pengerjaan
        }
        session.create(data)
            .then(result => {
                res.json({
                    message: "data has been inserted",
                    data: data
                })
            })
            .catch(error => {
                res.json({
                    message: error.message
                })
            })
    },
    controllerTimer: async (req, res) => {
        let param = {
            id_lembar_soal: req.body.id_lembar_soal,
            id_siswa: req.body.id_siswa
        }

        session.findOne({ where: param })
            .then(result => {
                res.json({
                    message: "Ujian selesai",
                    data: result
                })
            })
            .catch(error => {
                res.json({
                    message: error.message
                })
            })
    },
    controllerStart: async (req, res) => {
        let start = new Date()
        let endDate = new Date()
        let setdetik = endDate.setMilliseconds((endDate.getMilliseconds()) + 600000)
        let end = new Date(setdetik)

        let param = {
            id_lembar_soal: req.body.id_lembar_soal,
            id_siswa: req.body.id_siswa
        }
        console.log(param);
        const cekData = await session.findOne({ where: param })
        if (!cekData) {
            let data = {
                id_lembar_soal: req.body.id_lembar_soal,
                id_siswa: req.body.id_siswa,
                id_event: req.body.id_event,
                nilai: 0,
                start: start,
                finish: end
            }
            session.create(data)
                .then(result => {
                    res.json({
                        message: "Ujian dimulai",
                        data: result
                    })
                })
                .catch(error => {
                    res.json({
                        message: error.message
                    })
                })
        } else {
            res.json({
                message: "Ujian sudah dimulai",
                data: cekData
            })
        }
    },
    controllerFinish: async (req, res) => {
        let finish = new Date()

        let param = {
            id_lembar_soal: req.body.id_lembar_soal,
            id_siswa: req.body.id_siswa
        }

        let data = {
            nilai: req.body.nilai,
            // waktu_pengerjaan: req.body.waktu_pengerjaan,
            finish: finish
        }
        console.log(data);
        session.update(data, { where: param })
            .then(result => {
                res.json({
                    message: "Ujian selesai",
                    data: data
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
            id_session: req.params.id
        }
        let data = {
            id_lembar_soal: req.body.id_lembar_soal,
            id_siswa: req.body.id_siswa,
            nilai: req.body.nilai,
            waktu_pengerjaan: req.body.waktu_pengerjaan
        }
        session.update(data, { where: param })
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
            id_role: req.params.id
        }
        role.destroy({ where: param })
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