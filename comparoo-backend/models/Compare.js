const mongoose = require("mongoose");

const CompareSchema = new mongoose.Schema({
  email: String, // user email or null
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Compare", CompareSchema);
