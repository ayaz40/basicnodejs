const express = require("express")
const router = express.Router()
router.get("/",(req,res)=>{
    res.render("home",{title:"HOME"})
})
module.exports=router