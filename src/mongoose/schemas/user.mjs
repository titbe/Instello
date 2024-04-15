import mongoose from "mongoose";

const Userschema = new mongoose.Schema({
  username: {
    type: mongoose.Schema.Types.String,
    require: true,
    unique: true,
  },
  displayname: mongoose.Schema.Types.String,
  password: {
    type: mongoose.Schema.Types.String,
    require: true,
  },
});

export const User = mongoose.model("User", Userschema);
