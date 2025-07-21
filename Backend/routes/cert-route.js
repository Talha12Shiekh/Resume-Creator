const express = require("express");
const { createCertificate } = require("../controller/cert-controller");
const router = express.Router();

router.post("/create", createCertificate);

module.exports = router;

