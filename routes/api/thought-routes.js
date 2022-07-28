const express = require("express");
const router = express.Router();
const {
  getAllThoughts,
  getThoughtById,
  addThought,
} = require("../../controllers/thought-controller");

// get all thoughts
router.route("/").get(getAllThoughts);

// get one thought
router.route("/:id").get(getThoughtById);

// add a thought to user
router.route("/user/:userId").post(addThought);

module.exports = router;
