const { Certificate } = require("../models/certificate-model");

exports.createCertificate = async (req, res) => {
    const { name, date, signature, details, url } = req.body;

    console.log("----------------------------");
    console.log(name, date, signature, details);
    console.log("----------------------------");

    try {
        const certificate = new Certificate({
            name,
            date,
            signature,
            details,
            url,
            createdBy: req.veruserid
        });

        await certificate.save();

        return res.status(201).json({ success: true, message: "Certificate created successfully!" })
    } catch (err) {
        if (err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message);
            console.log(messages);
            return res.status(400).json({ success: false, messages });
        }

        return res.status(500).json({ success: false, message: "Internal Server Error!" });
    }
}

exports.getcertificate = async (req, res) => {
    try {

        const certificates = await Certificate.find({ createdBy: req.veruserid }, "url");
        return res.status(201).json({ success: true, data: certificates })

    } catch (err) {
        if (err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message);
            return res.status(400).json({ success: false, messages });
        }

        return res.status(500).json({ success: false, message: "Internal Server Error!" });
    }
}