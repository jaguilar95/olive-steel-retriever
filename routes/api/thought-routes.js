const express = require("express");
const router = express.Router();
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thought-controller");

// set up /api/thoughts/
router.route("/").get(getAllThoughts);

// set up /api/thoughts/:id
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// set up /api/thoughts/user/:userId
router.route("/user/:userId").post(addThought);

module.exports = router;
