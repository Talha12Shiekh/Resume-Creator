const mongoose = require("mongoose");
const { Schema } = mongoose;

const certificateSchema = new Schema({
    name: {
        type: String,
        minLength: [5, "Name must be at least 5 characters long."],
        maxLength: [20, "Name cannot exceed 20 characters."],
        required: [true, "Name is required."],
    },
    date: String,
    signature: {
        type: String,
        minLength: [5, "Signature must be at least 5 characters long."],
        maxLength: [20, "Signature cannot exceed 20 characters."],
        required: [true, "Signature is required."]
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    details: {
        type: String,
        minLength: [75, "Too short description."],
        maxLength: [150, "Too long description."],
        required: [true, "Description is required."]
    }
});

exports.Certificate = mongoose.model("Certificates",certificateSchema);