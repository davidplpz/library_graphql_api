import mongoose from "mongoose";

const schema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  sinopsis: {
    type: String,
  },
  release_date: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Book", schema);
