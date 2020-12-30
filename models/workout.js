let mongoose = require("mongoose");

let workoutSchema = new mongoose.Schema({
    day: {
        type: Date, default: () => new Date()
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Enter an exercise type"
        },
        name: {
            type: String,
            trim: true,
            required: "Enter an exercise name"
        },
        duration: {
            type: Number,
            required: "Enter an exercise duration in minutes"
        },
        weight: Number,
        reps: Number,
        sets: Number
    }]
})

module.exports = mongoose.model("Workout", workoutSchema)