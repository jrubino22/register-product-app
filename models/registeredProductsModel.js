const mongoose = require('mongoose')

const registeredProductSchema = new mongoose.Schema({
    warrantyId: {
        type: Number,
        required: true,
    },
    customerEmail: {
        type: String,
        required: true,
    },
    product: {
        type: String,
        required: true,
    },
    purchaseLocation: {
        type: String,
        required: true,
    },
    claims: {
        type: Number,
        required: true,
    }
})

const registeredProductModel = mongoose.model("Registered Products", registeredProductSchema);

module.exports = registeredProductModel