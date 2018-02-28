const router = require("express").Router();
const facebookRoutes = require('./facebook-auth-routes');
const googleRoutes = require('./google-auth-routes');

router.use("/auth/facebook", facebookRoutes);
router.use("/auth/google", googleRoutes);

module.exports = router;