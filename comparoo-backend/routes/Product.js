const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// create product (used by admin or user)
router.post("/add", async (req, res) => {
  try {
    const p = new Product(req.body);
    await p.save();
    res.json(p);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add product" });
  }
});

// list with optional q
router.get("/", async (req, res) => {
  try {
    const q = req.query.q;
    const filter = q ? { $text: { $search: q } } : {};
    const products = await Product.find(filter).sort({ createdAt: -1 }).limit(100);
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to list" });
  }
});

// single
router.get("/:id", async (req, res) => {
  try {
    const p = await Product.findById(req.params.id);
    if (!p) return res.status(404).json({ error: "Not found" });
    res.json(p);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed" });
  }
});

// best picks - simple rule: highest bestPickScore or rating
router.get("/best", async (req, res) => {
  try {
    const products = await Product.find({}).sort({ bestPickScore: -1, rating: -1 }).limit(10);
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed" });
  }
});

module.exports = router;
