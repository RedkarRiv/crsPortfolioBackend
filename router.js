const router = require('express').Router();
const cors = require('cors');
const authRoutes = require("./views/authRoutes")


router.use(cors());

router.use("/auth", authRoutes);


module.exports = router;