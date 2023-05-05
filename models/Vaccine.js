import { Schema, Types } from "mongoose";

const vaccineSchema = new Schema({
  petId: {
    type: Schema.Types.ObjectId,
    ref: "Pet",
  },
  vaccineId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
    unique: true,
    required: true,
  },
  vaccineName: {
    type: String,
    required: true,
    trim: true,
  },
  vaccineDate: {
    type: Date,
    required: true,
  },
  vaccineManufacturer: {
    type: String,
    required: true,
    trim: true,
  },
  vaccineLot: {
    type: String,
    required: true,
    trim: true,
  },
  vaccineNotes: {
    type: String,
    required: true,
    trim: true,
  },
});

const Vaccine = mongoose.model("Vaccine", vaccineSchema);

export default Vaccine;
