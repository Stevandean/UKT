const models = require('../../../../models/index');
const teknik = models.teknik;;

module.exports = {
    controllerGetAll: async (req, res) => {
        teknik.findAll()
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
    controllerGetByTipeUkt: async (req, res) => {
        teknik.findAll({
            where: {
                tipe_ukt: req.params.id
            },
            attributes: ['id_teknik','name']
        })
        .then(teknik => {
            res.json({
                count: teknik.length,
                tipe_ukt: req.params.id,
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
        let data ={        
            tipe_ukt: req.body.tipe_ukt,
            name: req.body.name
        }
        teknik.create(data)
        .then(result => {
            res.json({
                message: "data has been inserted"
            })
        })
        .catch(error =>{
            res.json({
                message: error.message
            })
        })
    },
    controllerEdit: async (req, res) => {
        let param = {
            id_teknik : req.params.id
        }
        let data ={        
            tipe_ukt: req.body.tipe_ukt,
            name: req.body.name
        }
        teknik.update(data, {where: param})
        .then(result => {
            res.json({
                message : "data has been updated"
            })
        })
        .catch(error => {
            res.json({
                message  : error.message
            })
        })
    },
    controllerDelete: async (req, res) => {
        let param = {
            id_teknik : req.params.id
        }
        teknik.destroy({where: param})
        .then(result => {
            res.json({
                massege : "data has been deleted"
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
    },
}