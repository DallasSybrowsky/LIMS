import { Schema, Types } from "mongoose";

const employeeSchema = new Schema({
  employeeId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
    unique: true,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  bio: {
    type: String,
    trim: true,
  },
  role: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isSuperUser: {
    type: Boolean,
    default: false,
  },
});

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;
