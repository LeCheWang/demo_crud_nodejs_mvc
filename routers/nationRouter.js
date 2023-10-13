const express = require("express")
const router = express.Router()

const {
    renderUINationPage,
    createNation,
    deleteNation,
    findNationById,
    editNation
} = require("../controllers/nation.controller")

router
    .route("/")
    .get(renderUINationPage)
    .post(createNation)

router
    .route("/:id")   
    .get(findNationById)
    .delete(deleteNation)
    .patch(editNation)

module.exports = router;