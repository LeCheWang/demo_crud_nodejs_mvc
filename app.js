const express = require("express");
const app = express();
//override method
var methodOverride = require('method-override');
app.use(methodOverride('_method'));
//cho phép client gửi body json lên
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const router = require("./routers");
const connectDB = require("./configs/database")

app.set("views", "./views")
app.set("view engine", "ejs")

app.use(express.static("./publics"))

connectDB();
router(app);

app.listen(5000, ()=>{
    console.log("Server run at port 5000");
})