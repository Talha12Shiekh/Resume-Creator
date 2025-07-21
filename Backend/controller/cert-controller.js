const { Certificate } = require("../models/certificate-model");

exports.createCertificate = async (req, res) => {
    const { name, date, signature, details } = req.body;


    try {
        const certificate = new Certificate({
            name,
            date,
            signature,
            details,
            createdBy: req.veruserid
        });

        await certificate.save();

        console.log("Certificate created successfully!");

        res.status(201).json({ success: true, message: "Certificate created successfully!" })
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ success: false, message: "Internal Server Error!" })
    }
}