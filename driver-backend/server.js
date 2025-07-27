const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const path = require("path");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 7000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/api/auth", require("./routes/auth"));

// Serve static files
app.use(express.static(path.join(__dirname, "dist")));

// Dashboard Test Route
app.get("/dashboard", (req, res) => {
  res.json({ message: "Welcome to the dashboard!" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
