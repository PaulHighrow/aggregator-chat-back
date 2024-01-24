const express = require("express");
const wakeUp = require("../controllers/wakeUp");
const addMessage = require("../controllers/addMessage");
const { validateMessage } = require("../schema/messageSchema");
const getMessages = require("../controllers/getMessages");
const editMessage = require("../controllers/editMessage");

const router = express.Router();

router.get("/", wakeUp);

router.post('/messages', validateMessage, addMessage);

router.patch('/messages/:id', editMessage);

router.get('/messages', getMessages);

module.exports = router;
