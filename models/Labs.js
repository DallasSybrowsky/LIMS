import { Schema, Types } from "mongoose";

const labTestSchema = new Schema({
  labTestName: {
    type: String,
    required: true,
    trim: true,
  },
  labTestResult: {
    type: String,
    required: true,
    trim: true,
  },
});

const labSchema = new Schema({
  labId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
    unique: true,
    required: true,
  },
  labDate: {
    type: Date,
    required: true,
  },
  petId: {
    type: Schema.Types.ObjectId,
    ref: "Pet",
  },
  labTests: {
    type: [labTestSchema],
    required: true,
  },
  labNotes: {
    type: String,
  },
});

const LabReport = mongoose.model("LabReport", labSchema);

export default LabReport;
