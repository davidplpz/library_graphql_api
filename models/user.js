import mongoose from "mongoose";

const schema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 3,
  },
  password: {
    type: String,
    required: true,
    minlength: 3,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("User", schema);
