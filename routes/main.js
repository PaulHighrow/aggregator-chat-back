const express = require("express");
const wakeUp = require("../controllers/wakeUp");
const addMessage = require("../controllers/addMessage");
const { validateMessage } = require("../schema/messageSchema");
const getMessages = require("../controllers/getMessages");

const router = express.Router();

router.get("/", wakeUp);

router.post('/messages', validateMessage, addMessage);

router.get('/messages', getMessages);

module.exports = router;
