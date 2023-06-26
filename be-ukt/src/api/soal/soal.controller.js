const models = require('../../models/index');
const soal = models.soal;
const kunciSoal = models.kunci_soal;
const { randomUUID } = require('crypto');

module.exports = {
    controllerGetAll: async (req, res) => {
        soal.findAll()
            .then(soal => {
                res.json({
                    count: soal.length,
                    data: soal
                })
            })
            .catch(error => {
                res.json({
                    message: error.message
                })
            })
    },
    controllerGetEmptySoal: async (req, res) => {
        soal.findAll({
            include: [
                {
                    model: kunciSoal,
                    as: "kunci_soal",
                    attributes: ['id_soal'],
                    required: false,
                }
            ],
            where: {
                "$kunci_soal.id_soal$": {
                    [Op.is]: null
                },
            },
        })
            .then(soal => {
                res.json({
                    count: soal.length,
                    data: soal
                })
            })
            .catch(error => {
                res.json({
                    message: error.message
                })
            })
    },
    controllerGetByLembarSoal: async (req, res) => {
        soal.findAll({
            where: {
                id_lembar_soal: req.params.id
            },
            order: [
                ["createdAt", "ASC"]
            ]
        })
            .then(soal => {
                res.json({
                    count: soal.length,
                    data: soal
                })
            })
            .catch(error => {
                res.json({
                    message: error.message
                })
            })
    },
    controllerGetAnswerByLembarSoal: async (req, res) => {
        soal.findAll({
            where: {
                id_lembar_soal: req.params.id
            },
            include: [
                {
                    model: kunciSoal,
                    as: "kunci_soal",
                    attributes: ['opsi'],
                    required: true,
                }
            ],
            order: [
                ["createdAt", "ASC"]
            ]
        })
            .then(soal => {
                res.json({
                    count: soal.length,
                    data: soal
                })
            })
            .catch(error => {
                res.json({
                    message: error.message
                })
            })
    },
    controllerGetExamQuestion: async (req, res) => {
        soal.findAll({
            where: {
                id_lembar_soal: req.params.id
            },
            order: [
                Sequelize.fn('RAND')
            ],
            limit: 20
        })
            .then(soal => {
                res.json({
                    count: soal.length,
                    data: soal
                })
            })
            .catch(error => {
                res.json({
                    message: error.message
                })
            })
    },
    controllerAdd: async (req, res) => {
        const id = randomUUID();
        let data = {
            id_soal: id,
            id_lembar_soal: req.body.id_lembar_soal,
            pertanyaan: req.body.pertanyaan,
            opsi1: req.body.opsi1,
            opsi2: req.body.opsi2,
            opsi3: req.body.opsi3,
            opsi4: req.body.opsi4,
        }
        soal.create(data)
            .then(result => {
                const id_kunci = randomUUID();
                console.log(result.dataValues.id_soal);
                kunciSoal.create({
                    id_kunci_soal: id_kunci,
                    id_soal: result.dataValues.id_soal,
                    opsi: req.body.opsi
                })
                    .then(result => {
                        res.json({
                            message: "data is inserted"
                        })
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
            id_soal: req.params.id
        }
        let data = {
            id_lembar_soal: req.body.id_lembar_soal,
            pertanyaan: req.body.pertanyaan,
            opsi1: req.body.opsi1,
            opsi2: req.body.opsi2,
            opsi3: req.body.opsi3,
            opsi4: req.body.opsi4
        }
        soal.update(data, { where: param })
            .then(result => {
                kunciSoal.update({ opsi: req.body.opsi }, { where: param })
                    .then(res => {
                        res.json({
                            message: "data has been updated"
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
    controllerDelete: async (req, res) => {
        let param = {
            id_soal: req.params.id
        }
        kunciSoal.destroy({ where: param })
        soal.destroy({ where: param })
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