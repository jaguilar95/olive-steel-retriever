const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  addFriend,
  updateUser,
  deleteUser,
  removeFriend,
} = require("../../controllers/user-controller");

// set up /api/users
router.route("/").get(getAllUsers).post(createUser);

// set up /api/users/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// set up /api/users/:id/:friendId
router.route("/:id/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;
