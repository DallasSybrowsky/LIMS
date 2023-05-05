import { Schema, Types } from ("mongoose");

const clientSchema = new Schema({
  clientId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
    unique: true,
    required: true,
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
    unique: true,
    trim: true,
    match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 10,
  },
  phoneType: {
    type: String,
    trim: true,
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
    enum: [
      'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
      'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
      'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
      'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
      'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY',
      'AB', 'BC', 'MB', 'NB', 'NL', 'NT', 'NS', 'NU', 'ON', 'PE',
      'QC', 'SK', 'YT',
    ],
    trim: true,
  },
  addressCountry: {
    type: String,
    required: true,
    trim: true,
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
  alternateContact: {
    type: Schema.Client,
    ref: "Client",
  },
  clientPhoto: {
    data: Buffer,
    contentType: String
  }
});

const Client = mongoose.model("Client", clientSchema);

export default Client;
