import { Schema, Types } from "mongoose";

const medicationSchema = new Schema({
  petId: {
    type: Schema.Types.ObjectId,
    ref: "Pet",
  },
  medicationId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
    unique: true,
    required: true,
  },
  medicationName: {
    type: String,
    required: true,
    trim: true,
  },
  medicationType: {
    type: String,
    required: true,
    trim: true,
  },
  medicationMfr: {
    type: String,
    required: true,
    trim: true,
  },
  medcationStartDate: {
    type: Date,
    required: true,
  },
  medicationDosage: {
    type: String,
    required: true,
    trim: true,
  },
  medicationFrequency: {
    type: String,
    required: true,
    trim: true,
  },
  medicationNotes: {
    type: String,
    required: true,
    trim: true,
  },
});

const Medication = mongoose.model("Medication", medicationSchema);

export default Medication;
