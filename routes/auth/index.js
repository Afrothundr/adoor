const router = require("express").Router();
const facebookRoutes = require('./facebook-auth-routes');
const googleRoutes = require('./google-auth-routes');

router.use("/facebook", facebookRoutes);
router.use("/google", googleRoutes);

module.exports = router;