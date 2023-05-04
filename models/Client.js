const { Schema, model } = require("mongoose");

const clientSchema = new Schema({
  clientId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 30,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 30,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 30,
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 10,
  },
  addressStreet: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 30,
  },
  addressCity: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 30,
  },
  addressState: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 2,
  },
  addressCountry: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 30,
  },
  addressPostcode: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 8,
  },
  pets: [
    {
      type: Schema.Types.ObjectId,
      ref: "Pet",
    },
  ],
});

const Client = model("Client", clientSchema);

module.exports = Client;
