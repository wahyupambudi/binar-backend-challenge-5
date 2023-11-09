const express = require("express");
const router = express.Router();
const { Register, Login, whoami } = require("../controller/auth.controller");
const { Authenticate } = require("../middleware/restrict");

router.post("/register", Register);
router.post("/login", Login);
router.get("/whoami", Authenticate, whoami);

module.exports = router;
