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
    controllerGetEmptySoal,
    controllerGetAnswerByLembarSoal,
    controllerGetExamQuestion,
    controllerGetByTipe,
    controllerGetCount,
} = require('./soal.controller');


const verifyRoles = require("../../middleware/verifyRoles")
let allowedRoles = verifyRoles("admin", "super admin", "admin ranting", "admin cabang", "pengurus cabang", "pengurus ranting", "penguji cabang", "penguji ranting")

router.get('/', Auth, allowedRoles, controllerGetAll)
router.get('/kosong', Auth, allowedRoles, controllerGetEmptySoal)
router.get('/count', Auth, allowedRoles, controllerGetCount)
router.get('/tipe/:tipe_ukt', Auth, allowedRoles, controllerGetByTipe)
router.get('/kunci/:tipe_ukt', Auth, allowedRoles, controllerGetAnswerByLembarSoal)
router.get('/lembar_soal/:id', Auth, allowedRoles, controllerGetExamQuestion)
router.post('/:tipe_ukt', Auth, allowedRoles, controllerAdd)
router.post('/kunci_jawaban', Auth, allowedRoles, controllerAdd)
router.put('/:id', Auth, allowedRoles, controllerEdit)
router.delete('/:id', Auth, allowedRoles, controllerDelete)

module.exports = router;