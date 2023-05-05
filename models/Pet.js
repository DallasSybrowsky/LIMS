import { Schema, Types } from "mongoose";

const petSchema = new Schema({
  petId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
    unique: true,
    required: true,
  },
  petName: {
    type: String,
    required: true,
    trim: true,
  },
  species: {
    type: String,
    required: true,
    trim: true,
  },
  breed: {
    type: String,
    required: true,
    trim: true,
  },
  sex: {
    type: String,
    enum: ["Male Intact", "Male Neutered", "Female Intact", "Female Spayed"],
    trim: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "Client",
    required: true,
  },
  appts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Appts",
    },
  ],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  medications: [
    {
      type: Schema.Types.ObjectId,
      ref: "Medication",
    },
  ],
  allergies: [
    {
      type: Schema.Types.ObjectId,
      ref: "Allergies",
    },
  ],
  vaccines: [
    {
      type: Schema.Types.ObjectId,
      ref: "Vaccine",
    },
  ],
  surgeries: [
    {
      type: Schema.Types.ObjectId,
      ref: "Surgery",
    },
  ],
  labs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Labs",
    },
  ],
  petPhoto: {
    data: Buffer,
    contentType: String,
  },
});

const Pet = mongoose.model("Pet", petSchema);

export default Pet;
