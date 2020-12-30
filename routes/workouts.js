const router = require('express').Router()
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
    try {
        const workout = await Workout.create({})
        res.status(201).json(workout)
    } catch (ex) {
        res.status(500).json({ error: ex.message })
    }
})

router.put('/:id', async function(req, res) {
    try {
        const workout = await Workout.findByIdAndUpdate(req.params.id, {
            $push: { exercises: req.body } 
        }, { new: true, runValidators: true })

        if (workout) {
            res.json(workout)
        } else {
            res.status(404).json({ error: 'Workout not found' })
        }
    } catch (ex) {
        res.status(500).json({ error: ex.message })
    }
})

module.exports = router