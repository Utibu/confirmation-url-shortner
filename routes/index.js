const Router = require("express").Router()

const createRouter = require("./create")
const visitRouter = require("./visit")

Router.use("/", createRouter)
Router.use("/v/:shortid", visitRouter)

module.exports = Router