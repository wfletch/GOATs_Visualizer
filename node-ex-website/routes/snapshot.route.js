const router = require("express").Router()
router.get("/", (req,res) => {
    res.json("TEST")
});
module.exports = router