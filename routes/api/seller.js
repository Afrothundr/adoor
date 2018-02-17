const router = require("express").Router();
const sellerController = require("../../controllers/sellerController");

// Matches with "/api/user"
router.route("/")
  .get(sellerController.findAll)
  .post(sellerController.create);

// Matches with "/api/users/:id
router
  .route("/:id")
  .get(sellerController.findById)
  .put(sellerController.update)
  .delete(sellerController.remove);

module.exports = router;
