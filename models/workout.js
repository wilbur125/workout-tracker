const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//create schema for workouts collection
const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [
      {
        name: {
            type: String,
            trim: true,
            required: "What is the name of the exercise?"
        },
        type: {
            type: String,
            trim: true,
            required: "What type of exercise is it?"
        },
        weight: {
            type: Number
          },
        sets: {
            type: Number
        },
        reps: {
            type: Number
        },
        duration: {
            type: Number,
            required: "How long did you perform the exercise for?"
        },
        distance: {
            type: Number
        }
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
