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

//gets total duration for exercises
//exercises is an array and reduce() will get the sum of the array at exercises.duration
workoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
      return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
