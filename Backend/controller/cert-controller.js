const { Certificate } = require("../models/certificate-model");

exports.createCertificate = async (req, res) => {
    const { name, date, signature, details, url } = req.body;

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

exports.deletecertificate = async (req, res) => {
    const { id } = req.params;


    try {

        const certificate = await Certificate.findById(id);

        if (!certificate) return res.status(404).send("Not found!");

        if (certificate.createdBy.toString() != req.veruserid.toString()) {
            return res.status(401).send("Not allowed");
        }

        await Certificate.findByIdAndDelete(id);
        return res.status(201).json({ success: true, message: "Certificate delete successfully " })

    } catch (err) {
        if (err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message);
            return res.status(400).json({ success: false, messages });
        }

        return res.status(500).json({ success: false, message: "Internal Server Error!" });
    }
}