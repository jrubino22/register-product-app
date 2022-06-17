const mongoose = require('mongoose')

const registeredProductsSchema = new mongoose.Schema({
    WarrantyId: {
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

const SessionModel = mongoose.model("Registered Products", registeredProductsSchema);

module.exports = SessionModel