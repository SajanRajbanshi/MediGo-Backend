const mongoose = require("./DBConnection")
const HospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is Compulsory..."]
    },
    postalcode: {
        type: String,
        required: [true, "Postal Code is Compulsory..."]
    },
    address: {
        type: String,
        required: [true, "Address is Compulsory..."]
    },
    establishedDate: {
        type: Date,
        required: [true, "Established Date is Compulsory..."]
    },
    services: {
        type: [String],
        required: [true, "Services are Compulsory..."]
    },
    rating: {
        type: Number,
        required: [true, "Rating is Compulsory..."]
    },
    type: {
        type: String,
        enum: ["Public", "Private"],
        required: [true, "Hospital Type is Compulsory..."]
    },
    avgfee: {
        type: Number,
        required: [true, "Avg Fee is Compulsory..."]
    }
});
const Hospital = mongoose.model("Hospital", HospitalSchema);
module.exports = Hospital;