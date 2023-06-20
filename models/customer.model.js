// id, name, address, phoneNumber, email
// name - string, required
// address - string, required
// phoneNumber - string, required, unique
// email - string, required, unique
// password - string, required

import mongoose from "mongoose";
import bcrypt from 'bcrypt';

// define schema
const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name']
  },
  address: {
    type: String,
    required: [true, 'Please add an address']
  },
  phoneNumber: {
    type: String,
    required: [true, 'Please add a phone number'],
    minLength: 14,
    maxLength: 14
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
    pattern: [/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,32}$/, 'Your password must include numbers and letters']
  }
}, { timestamps: true })

// when so ever a user os created hash their password
customerSchema.pre('save', function (next) {
  this.password = bcrypt.hashSync(this.password, 10);

  next();
});

// define the model
const customerModel = mongoose.model('customer', customerSchema);

// export the model
export default customerModel;