const express = require("express")
const router = express.Router()


router
    .route("/")
    .get((req, res, next) => {
        return res.send("get players");
    })
    .post((req, res, next) => {
        const body = req.body;
        return res.send("post player: " + body.fullName);
    })

module.exports = router;