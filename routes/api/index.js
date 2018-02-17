const router = require("express").Router();
const userRoutes = require("./user");
const preferenceRoutes = require("./preference");
const matchRoutes = require("./match");
const listingRoutes = require("./listing");
const communityRoutes = require("./community");
const sellerRoutes = require("./seller");

// routes
router.use("/users", userRoutes);
router.use("/preferences", preferenceRoutes);
router.use("/match", matchRoutes);
router.use("/listing", listingRoutes);
router.use("/community", communityRoutes);
router.use("/seller", sellerRoutes);


module.exports = router;
