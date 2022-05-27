const router = require("express").Router()
const fs = require('fs');
router.get("/", (req,res) => {
    var files = fs.readdirSync('../snapshots/');
    console.log("Hello!")
    console.log(files);
});

module.exports = router