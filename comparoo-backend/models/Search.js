const mongoose = require("mongoose");

const SearchSchema = new mongoose.Schema({
  email: String,
  query: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Search", SearchSchema);
