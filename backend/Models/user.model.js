import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  text: { type: String, require: true },
  timstamp: {
    type: Date,
    default: Date.now,
  },
});

export const User = mongoose.model("userData", userSchema);
