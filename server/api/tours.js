const express = require('express');
const router = express.Router();

const { getAllTours,
    getToursById,
    createTours,
    updateTours,
    deleteTours } = require('../db/sqlHelperFunctions/tours');

router.get('/', async (req, res, next) => {
    try {
        const tours = await getAllTours();
        res.send(tours);
    } catch (error) {
        next(error);
    }
});


router.get('/:id', async (req, res, next) => {
    try {
        const tour = await getToursById(req.params.id);
        res.send(tour);
    } catch (error) {
        next(error);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const tour = await createTours(req.body);
        res.send(tour);
    } catch (error) {
        next(error);
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const tour = await updateTours(req.params.id, req.body);
        res.send(tour);
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const tour = await deleteTours(req.params.id);
        res.send(tour);
    } catch (error) {
        next(error);
    }
});

module.exports = router;