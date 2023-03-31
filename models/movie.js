const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    director: {
        type: String,
    },
    dateAired: {
        type: Date,
    },
    genre: {
        type: [String],
    },
    duration: {
        type: String,
    },
    score: {
        type: String,
    },
    coverImage: {
        type: String,
    }
}, { timestamps: true })

const Movie = mongoose.model('Movie', movieSchema)
module.exports = Movie