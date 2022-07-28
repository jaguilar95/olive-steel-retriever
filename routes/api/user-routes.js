const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  createUser,
} = require("../../controllers/user-controller");

// set up /api/users
router.route("/").get(getAllUsers).post(createUser);

module.exports = router;
