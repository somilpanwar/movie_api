const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  movie_name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 10
  },
  duration: {
    type: String,
    required: true
  },
  language: {
    type: String,
    required: true
  },
  movie_thumbnail: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^https?:\/\/.+\.(jpg|jpeg|png|gif)$/i.test(v);
      },
      message: props => `${props.value} is not a valid image URL!`
    }
  },
  cast: {
    type: [String],
    required: true
  }
});

const Movie = mongoose.model('moviedatas', movieSchema);

module.exports = Movie;
