const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const Auth = require('../../middleware/Auth');

const {
    controllerGetAll,
    controllerAdd,
    controllerEdit,
    controllerDelete,
    controllerCheckAnswer,
} = require('./lembar_jawaban.controller');


const verifyRoles = require("../../middleware/verifyRoles")

router.get('/', Auth, verifyRoles('siswa'), controllerGetAll)
router.get('/', Auth, verifyRoles('siswa'), controllerCheckAnswer)
router.post('/', Auth, verifyRoles('siswa'), controllerAdd)
router.put('/:id', Auth, verifyRoles('siswa'), controllerEdit)
router.delete('/:id', Auth, verifyRoles('siswa'), controllerDelete)

module.exports = router;