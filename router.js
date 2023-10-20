const router = require("express").Router();
const cors = require("cors");
const authRoutes = require("./views/authRoutes");
const adminRoutes = require("./views/adminRoutes");
const userRoutes = require("./views/userRoutes");

router.use(cors());

router.use("/auth", authRoutes);
router.use("/admin", adminRoutes);
router.use("/user", userRoutes);

module.exports = router;
