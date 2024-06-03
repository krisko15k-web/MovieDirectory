const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    director: {
      type: String,
    },
    releaseDate: {
      type: Date,
    },
    genre: {
      type: Array,
    },
    duration: {
      type: Number,
    },
    score: {
      type: String,
    },
    coverImage: {
      type: String,
    },
  },
  { timestamps: true }
);

movieSchema.index({ title: "text" });

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
