const express = require("express");

const router = express.Router();
const contactController = require("../controllers/contactController.js");

// router.param('id', tourController.checkID);

router
  .route("/:zipCode")
  .get(contactController.getContactsByZipCode)

module.exports = router;
