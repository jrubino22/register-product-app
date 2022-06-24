const mongoose = require('mongoose')

const serialNumberSchema = new mongoose.Schema({
    serialNumber: {
        type: String,
        required: true,
    }
})

const serialNumberModel = mongoose.model("serial numbers", serialNumberSchema);

module.exports = serialNumberModel