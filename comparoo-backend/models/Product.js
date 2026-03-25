const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  priceText: String, // raw price string if you need currency symbol
  rating: Number,
  image: String, // url/path
  features: [String],
  bestPickScore: Number,
  location: { lat: Number, lon: Number }, // for map
  stock: { type: Boolean, default: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null }
}, { timestamps: true });

module.exports = mongoose.model("Product", ProductSchema);
