const express = require("express");
const router = express.Router();
const Compare = require("../models/Compare");
const Product = require("../models/Product");

// save a compare (list of product ids)
router.post("/save", async (req, res) => {
  try {
    const { email, productIds } = req.body;
    const c = new Compare({ email, products: productIds });
    await c.save();
    res.json(c);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed" });
  }
});

// get compare by id
router.get("/:id", async (req, res) => {
  try {
    const c = await Compare.findById(req.params.id).populate("products");
    if (!c) return res.status(404).json({ error: "Not found" });
    res.json(c);
  } catch (err) {
    res.status(500).json({ error: "Failed" });
  }
});

// quick endpoint to compare product ids (returns product details)
router.post("/preview", async (req, res) => {
  try {
    const { productIds } = req.body;
    const products = await Product.find({ _id: { $in: productIds } });
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed" });
  }
});

module.exports = router;
