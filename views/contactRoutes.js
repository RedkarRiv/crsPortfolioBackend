const messageController = require("../controllers/messagesController");
const router = require("express").Router();

router.post("/newContact", messageController.newContact);

module.exports = router;
