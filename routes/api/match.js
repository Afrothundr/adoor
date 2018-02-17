const router = require("express").Router();
const matchController = require("../../controllers/matchController");

// Matches with "/api/match"
router.route("/")
  .get(matchController.findAll)
  .post(matchController.create);

// Matches with "/api/match/:id
router
  .route("/:id")
  .get(matchController.findById)
  .delete(matchController.remove);

router
  .route("/update")
  .put(matchController.update);

module.exports = router;