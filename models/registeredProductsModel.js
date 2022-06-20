const mongoose = require('mongoose')

const registeredProductSchema = new mongoose.Schema({
    warrantyId: {
        type: String,
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
})

const registeredProductModel = mongoose.model("Registered Products", registeredProductSchema);

module.exports = registeredProductModel