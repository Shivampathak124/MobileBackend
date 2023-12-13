const mongoose = require("mongoose");

const mobileSchema = new mongoose.Schema({
    name: { type: String, require: true },
    brand: { type: String, require: true },
    year: { type: Number, require: true },
    price: { type: Number, require: true}, 
})



const mobile = mongoose.model("Mobile", mobileSchema)

module.exports = mobile;
