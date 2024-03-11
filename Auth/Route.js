const express = require("express")
const router = express.Router()
const { register } = require("./auth")
router.route("/register").post(register)
module.exports = router

const { register, login } = require("./auth");
router.route("/login").post(login);
module.exports = router;

const { register, login, update } = require("./auth");
router.route("/update").put(update);

const { register, login, update, deleteUser } = require("./auth");
router.route("/deleteUser").delete(deleteUser);

