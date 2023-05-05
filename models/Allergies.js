import { Schema, Types } from "mongoose";

const allergySChema = new Schema({
  petId: {
    type: Schema.Types.ObjectId,
    ref: "Pet",
  },
  clientId: {
    type: Schema.Types.ObjectId,
    ref: "Client",
  },
  allergyId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
    unique: true,
    required: true,
  },
  allergyName: {
    type: String,
    required: true,
    trim: true,
  },
  allergyType: {
    type: String,
    required: true,
    trim: true,
  },
  allergyNotes: {
    type: String,
    required: true,
    trim: true,
  },
});

const Allergies = mongoose.model("Allergies", allergySchema);

export default Allergies;
