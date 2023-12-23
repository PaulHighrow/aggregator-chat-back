const express = require("express");

const { validateLinks } = require("../schema/linksSchema");
const getLinks = require("../controllers/getLinks");
const addLinks = require("../controllers/addLinks");
const updateLinks = require("../controllers/updateLinks");
const getOneLink = require("../controllers/getOneLink");
const auth = require("../middlewares/streams/auth");

const router = express.Router();

router.get("/all", getLinks);

router.get("/", getOneLink);

router.post("/", auth, validateLinks, addLinks);

router.patch("/", auth, validateLinks, updateLinks);

module.exports = router;
