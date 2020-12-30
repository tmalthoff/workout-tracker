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

router.get('/range', async function(req, res) {
    try {
        const workouts = await Workout.find({}).limit(7)
        res.json(workouts)
    } catch (ex) {
        res.status(500).json({ error: ex.message })
    }
})

router.post('/', async function(req, res) {
    console.log(req.body)
})

router.put('/:id', async function(req, res) {
    try {
        const workout = Workout.findById(req.params.id)
        if (workout) {
            await workout.updateOne({ 
                $push: { exercises: req.body } 
            })
            res.sendStatus(200)
        } else {
            res.status(404).json({ error: 'Workout not found' })
        }
    } catch (ex) {
        res.status(500).json({ error: ex.message })
    }
})

module.exports = router