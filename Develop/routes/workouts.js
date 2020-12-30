const express = require('express')
const router = express.Router()
const { Workout } = require('../models')

router.get('/', async function(req, res) {
    try {
        const workouts = await Workout.find({})
        res.json(workouts)
    } catch (ex) {
        res.status(500).json({ error: ex.message })
    }
})

module.exports = router