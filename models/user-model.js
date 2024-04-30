const { Schema, model } = require('mongoose');
const addressSchema = require('../schemas/addressSchema');

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  shippingAddress: [
    {
      type: addressSchema,
      required: true,
    },
  ],
  billingAddress: [
    {
      type: addressSchema,
      required: true,
    },
  ],
  isActivated: { type: Boolean, default: false },
  activationLink: { type: String },
});

module.exports = model('User', userSchema);
