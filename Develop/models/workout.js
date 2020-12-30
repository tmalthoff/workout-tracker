let mongoose = require("mongoose");

let workoutSchema = new mongoose.Schema({
    day: {
        type: Date, required: true
    },
    exercises: [{
        type: String,
        name: String,
        duration: Number,
        weight: Number,
        reps: Number,
        sets: Number
    }]
})

module.exports = mongoose.model("Workout", workoutSchema)