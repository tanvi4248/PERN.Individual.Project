const express = require("express");
const router = express.Router();
const { authRequired } = require("./utils");
const {
  getAllTours,
  getToursById,
  createTours,
  updateTours,
  deleteTours,
} = require("../db/sqlHelperFunctions/tours");

const { createReservations } = require("../db/sqlHelperFunctions/guests");
router.get("/", async (req, res, next) => {
  try {
    const tours = await getAllTours()
    res.send(tours);
  } catch (error) {
    next(error);
  }
});

router.post("/:id", async (req, res, next) => {
  try {
    const newFav = await createReservations(req.body);
    res.send(newFav);
  } catch (error) {
    next(error);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const tour = await getToursById(req.params.id);
    res.send(tour);
  } catch (error) {
    next(error);
  }
});

router.post("/", authRequired, async (req, res, next) => {
  try {
    const tour = await createTours(req.body);
    res.send(tour);
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const tour = await updateTours(req.params.id, req.body);
    res.send(tour);
  } catch (error) {
    next(error);
  }
});



router.delete("/:id", async (req, res, next) => {
  try {
    const tour = await deleteTours(req.params.id);
    res.send(tour);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
