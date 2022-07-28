const express = require("express");
const router = express.Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).send("<p>404 Error!</p>");
});

module.exports = router;
