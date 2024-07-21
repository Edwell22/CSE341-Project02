const express = require("express");
const router = express.Router();

const premiumShowsController = require("../controllers/shows.js");
const validation = require('../middleware/validate.js');
const { isAuthenticated } = require("../middleware/authenticate.js");

// GET Requests

router.get("/", premiumShowsController.getAllPremiumShows);

router.get("/:id", premiumShowsController.getSinglePremiumShow);

// POST or create Request

router.post('/', validation.saveShow, isAuthenticated, premiumShowsController.createPremiumShow);

// PUT or update Request

router.put('/:id', validation.saveShow, isAuthenticated, premiumShowsController.updatePremiumShow);

// DELETE Request

router.delete('/:id', isAuthenticated, premiumShowsController.deletePremiumShow);

module.exports = router;
