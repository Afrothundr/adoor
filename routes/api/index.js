const router = require("express").Router();
const userRoutes = require("./user");
const preferenceRoutes = require("./preference");
const matchRoutes = require("./match");

// routes
router.use("/users", userRoutes);
router.use("/preferences", preferenceRoutes);
router.use("/match", matchRoutes);

module.exports = router;
