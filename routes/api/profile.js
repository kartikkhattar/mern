const express = require("express");
const router = express.Router();

// @route GET api/profile/test
// @desc Tests post route
// @access Public route
router.get("/test", (req, res) => res.json({ msg: "Profiles works!" }));

module.exports = router;
