const router = require("express").Router();
const crimedataController = require("../../controllers/crimedataController");

// Matches with "/api/community/:id
router
  .route("/:zipcode")
  .get(crimedataController.findByZipcode)

module.exports = router;