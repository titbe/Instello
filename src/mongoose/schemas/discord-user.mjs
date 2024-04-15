import mongoose from "mongoose";

const DiscordUserchema = new mongoose.Schema({
  username: {
    type: mongoose.Schema.Types.String,
    require: true,
    unique: true,
  },
  discordId: {
    type: mongoose.Schema.Types.String,
    require: true,
    unique: true,
  }
});

export const DiscordUser = mongoose.model("DiscordUser", DiscordUserchema);
