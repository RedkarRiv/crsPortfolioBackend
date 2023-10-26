const router = require("express").Router();
const cors = require("cors");
const authRoutes = require("./views/authRoutes");
const adminRoutes = require("./views/adminRoutes");
const userRoutes = require("./views/userRoutes");
const contactRoutes = require("./views/contactRoutes");

router.use(cors());

router.use("/auth", authRoutes);
router.use("/admin", adminRoutes);
router.use("/user", userRoutes);
router.use("/message", contactRoutes);

module.exports = router;
