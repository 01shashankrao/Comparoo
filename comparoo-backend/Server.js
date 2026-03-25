require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// connect
const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/comparoo";
mongoose
  .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Mongo connect error:", err));

// routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/compare", require("./routes/compareRoutes"));
app.use("/api/search", require("./routes/searchRoutes"));

// simple root
app.get("/", (req, res) => res.send({ ok: true }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
