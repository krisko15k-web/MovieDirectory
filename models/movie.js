const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    dateAired: {
        type: Date,
        required: true
    },
    genre: {
        type: [String],
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    score: {
        type: String,
        required: true
    },
    coverImage: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Movie = mongoose.model('Movie', movieSchema)
module.exports = Movie