const express = require("express");
const { router } = require("../../app");
const contacts = require("../controllers/contact.controller");

const router = express.Router();
router.route("/")
    .get(contacts.findAll)
    .post(contacts.create)
    .delete(contacts.deletaAll);

router.route("/")
    .get(contacts.findAllFavorite);

router.route("/:id")
    .get(contacts.findOne)
    .put(contacts.update)
    .delete(contacts.delete);

module.exports = router;
