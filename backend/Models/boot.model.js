import mongoose from "mongoose";

const botSchema = new mongoose.Schema({
  sender: { type: String, require: true, enum: ["user"] },
  text: { type: String, require: true, },
  timstamp: {
    type:Date,default:Date.now
  }
})

export const Bot=mongoose.model("botData",botSchema)