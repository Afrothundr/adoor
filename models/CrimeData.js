const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let crimeSchema = new Schema({
    "Zip Code": Number
}, { strict: false });

let Crime = mongoose.model('Crimes', crimeSchema);

module.exports = Crime;