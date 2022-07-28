const express = require("express");
const router = express.Router();
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  addReaction,
  updateThought,
  deleteThought,
  removeReaction,
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

// set up /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction);

// set up /api/thoughts/:thoughtId/reactions/reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
