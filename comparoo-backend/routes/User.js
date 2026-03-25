const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Product = require("../models/Product");

// fetch profile by email
router.get("/profile/:email", async (req, res) => {
  try {
    const u = await User.findOne({ email: req.params.email }).select("-passwordHash");
    if (!u) return res.status(404).json({ error: "Not found" });
    res.json(u);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// update profile
router.post("/profile/update", async (req, res) => {
  try {
    const { email, updates } = req.body;
    const u = await User.findOneAndUpdate({ email }, { $set: updates }, { new: true }).select("-passwordHash");
    res.json(u);
  } catch (err) {
    res.status(500).json({ error: "Failed to update" });
  }
});

// save product for user
router.post("/save-product", async (req, res) => {
  try {
    const { email, product } = req.body;
    const u = await User.findOne({ email });
    if (!u) return res.status(404).json({ error: "User not found" });
    // if product is object, store in products collection first
    let prodId;
    if (typeof product === "string") {
      prodId = product;
    } else {
      const P = new Product(product);
      await P.save();
      prodId = P._id;
    }
    if (!u.savedProducts.includes(prodId)) {
      u.savedProducts.push(prodId);
      await u.save();
    }
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed" });
  }
});

// get saved
router.get("/saved/:email", async (req, res) => {
  try {
    const u = await User.findOne({ email: req.params.email }).populate("savedProducts");
    if (!u) return res.status(404).json({ error: "No user" });
    res.json(u.savedProducts || []);
  } catch (err) {
    res.status(500).json({ error: "Failed" });
  }
});

module.exports = router;
