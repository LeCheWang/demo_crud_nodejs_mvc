const mongoose = require("mongoose");

const nationSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    versionKey: false,
    timestamps: false
})

module.exports = mongoose.model("nation", nationSchema);