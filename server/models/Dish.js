const mongoose = require('mongoose');

const { Schema } = mongoose;

const dishSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  recommend: {
    type: Boolean,
  },
  menu: {
    type: Schema.Types.ObjectId,
    ref: 'Menu',
    required: true
  }
});

const Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;
