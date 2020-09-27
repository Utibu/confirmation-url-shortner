/**
 * Routes to create a new URL
 */

const Router = require("express").Router()
const shortid = require("shortid")
const { createValidation } = require("../validation/createValidation")
const ShortLink = require("../models/ShortLink")

Router.get("/", (req, res) => {
    //res.send("Create a new URL!")
    res.render("../views/index.ejs")
})

Router.post("/", async (req, res) => {
    const { error } = createValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message)
    const id = shortid.generate()
    //const id = 55

    const shortLink = new ShortLink({
        link: req.body.link,
        shortid: id,
    })

    try {
        const savedLink = await shortLink.save()
        /*res.send({
            link: savedLink.shortid,
        })*/
        res.render("../views/generated.ejs", { link: savedLink.shortid })
    } catch( err ) {
        let msg = ""
        if (err.name === "MongoError" && err.code === 11000) {
            msg = "The shortid already exist!"
        } else {
            msg = err
        }
        res.status(400).send(msg)
    }
})

module.exports = Router