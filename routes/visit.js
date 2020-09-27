const Router = require("express").Router({
    mergeParams: true
})
const ShortLink = require("../models/ShortLink")

Router.get("/", async (req, res) => {

    const linkEntry = await ShortLink.findOne({ shortid: req.params.shortid })
    if(!linkEntry) return res.status(400).send("No link with that id.")

    /*res.send({
        link: linkEntry.link,
        shortid: linkEntry.shortid
    })*/
    res.render("../views/view.ejs", { 
        url: linkEntry.link,
        shortid: linkEntry.shortid
    })
})

Router.get("/go", async (req, res) => {
    const linkEntry = await ShortLink.findOne({ shortid: req.params.shortid })
    if(!linkEntry) return res.status(400).send("No link with that id.")

    res.redirect(linkEntry.link)
})

module.exports = Router