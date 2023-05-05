import { Schema, Types } from "mongoose";
import Pet from "./Pet";

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
});

const Surgery = mongoose.model("Surgery", surgerySchema);

export default Surgery;
