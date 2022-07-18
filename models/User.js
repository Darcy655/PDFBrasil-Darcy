const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    usuario: String,
    email: String,
    password: String,
    documento: String,
    image: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
