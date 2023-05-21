// MODELS
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PicSchema = new mongoose.Schema({
  title: String,
  image: String,
  description: String,
});

const Pic = mongoose.model("Pic", PicSchema);

module.exports = Pic;
