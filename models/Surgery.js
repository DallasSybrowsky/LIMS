import { Schema, Types } from "mongoose";

const surgerySchema = new Schema({
  petId: {
    type: Schema.Types.ObjectId,
    ref: "Pet",
  },
  surgeryId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
    unique: true,
    required: true,
  },
  employeeId: {
    type: Schema.Types.ObjectId,
    ref: "Employee",
  },
  surgeryDate: {
    type: Date,
    required: true,
  },
  surgeryType: {
    type: String,
    required: true,
  },
  surgeryNotes: {
    type: String,
  },
  surgeryCode: {
    type: Number,
    required: true,
  },
});

const Surgery = mongoose.model("Surgery", surgerySchema);

export default Surgery;
