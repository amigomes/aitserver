const express = require("express");
const { submitNewTool } = require("../../controllers/submitController");
const router = express.Router();

router.route("/tools").get((req,res)=>{
    //Get tools from controller
    res.send("List of all tools");
})

router.route("/tools").post((req,res)=>{
    req.accepts('application/json');
    res.send("")
})

router.route("/submit").post(submitNewTool);

module.exports = router;