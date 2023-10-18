const nationRouter = require("./nationRouter")
const playerRouter = require("./playerRouter")
const authRouter = require("./authRouter")

const errorHandle = require("../middlewares/error.handle")

module.exports = (app) => {
    app.use("/nations", nationRouter)
    app.use("/players", playerRouter)
    app.use("/api/auth", authRouter)

    app.use(errorHandle)
}