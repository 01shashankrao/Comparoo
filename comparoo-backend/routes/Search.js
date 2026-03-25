const express = require("express");
const router = express.Router();
const Search = require("../models/Search");

// save search
router.post("/save", async (req, res) => {
  try {
    const { email, query } = req.body;
    const s = new Search({ email, query });
    await s.save();
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed" });
  }
});

// get recent
router.get("/:email", async (req, res) => {
  try {
    const rows = await Search.find({ email: req.params.email }).sort({ createdAt: -1 }).limit(20);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "Failed" });
  }
});

module.exports = router;
