const express = require("express");
const { createCertificate, getcertificate, deletecertificate } = require("../controller/cert-controller");
const router = express.Router();

router.
    post("/create", createCertificate).
    get("/getcertificates", getcertificate).
    delete("/deletecertificate/:id", deletecertificate);

module.exports = router;

