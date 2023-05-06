import { Schema, Types } from "mongoose";

const commentSchema = new Schema({
  commentId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
    unique: true,
    required: true,
  },
  commentDate: {
    type: Date,
    required: true,
  },
  commentTime: {
    type: String,
    required: true,
  },
  commentData: [
    {
      commentSubjective: {
        type: String,
        required: true,
      },
      commentObjective: {
        type: String,
        required: true,
      },
      commentAssessment: {
        type: String,
        required: true,
      },
      commentPlan: {
        type: String,
        required: true,
      },
    },
  ],
  petId: {
    type: Schema.Types.ObjectId,
    ref: "Pet",
  },
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
