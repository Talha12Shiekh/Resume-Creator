const express = require("express");
const { createCertificate, getcertificate } = require("../controller/cert-controller");
const router = express.Router();

router.
    post("/create", createCertificate).
    get("/getcertificates", getcertificate);

module.exports = router;

