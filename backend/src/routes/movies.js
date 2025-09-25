const express = require("express");
const router = express.Router();

router.get("/search", (req,res) => {
    res.json({message: "Movie search route placeholder"});
});

module.exports = router;