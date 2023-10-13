const nationRouter = require("./nationRouter")
const playerRouter = require("./playerRouter")

module.exports = (app) => {
    app.use("/nations", nationRouter)
    app.use("/players", playerRouter)
}