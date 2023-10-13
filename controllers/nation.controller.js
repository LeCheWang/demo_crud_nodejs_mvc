const Nation = require("../models/nations")

module.exports = {
    renderUINationPage: async (req, res)=>{
        const nations = await Nation.find();
        return res.render("nations/index.ejs", { nations: nations });
    },
    createNation: async(req, res)=>{
        await Nation.create(req.body);
        return res.redirect("/nations");
    },
    deleteNation: async(req, res)=>{
        const id = req.params.id;
        await Nation.findByIdAndDelete(id);
        return res.status(200).json({
            statusCode: 200,
            message: "Xóa thành công"
        })
    },
    findNationById: async(req, res)=>{
        const id = req.params.id;
        const nation = await Nation.findById(id);
        return res.render("nations/nation.detail.ejs", {nation: nation})
    },
    editNation: async(req, res)=>{
        const id = req.params.id;
        const body = req.body;
        await Nation.findByIdAndUpdate(id, body);
 
        return res.redirect("/nations");
    }
}