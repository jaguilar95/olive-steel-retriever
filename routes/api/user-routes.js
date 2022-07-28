const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/user-controller");

// set up /api/users
router.route("/").get(getAllUsers).post(createUser);

// set up /api/users/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;
