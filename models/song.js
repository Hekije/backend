const mongoose = require('mongoose');
const { Schema } = mongoose;

const songSchema = new Schema({
    title: { type: String, required: true },
    artist: String,
    popularity: { type: Number, min: 1, max: 10 },
    releaseDate: { type: Date, default: Date.now },
    genre: [String]
});

const Song = mongoose.model('Song', songSchema);

module.exports = Song;
