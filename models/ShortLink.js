const mongoose = require("mongoose")

const shortLinkSchema = mongoose.Schema({
    link: {
        type: String,
        required: true,
    },
    shortid: {
        type: String,
        required: true,
        index: true,
        unique: true
    }
})
//shortLinkSchema.index({shortid: 1}, { unique: true })
mongoose.set("debug", true)

module.exports = mongoose.model("Link", shortLinkSchema)