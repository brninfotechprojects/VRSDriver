const express = require("express");
const router = express.Router();
const Driver = require("../models/Driver");

// Signup Route
router.post("/signup", async (req, res) => {
  const { name, email, phone, password } = req.body;
  console.log("📥 Signup request received:", req.body);

  try {
    const existing = await Driver.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const newDriver = new Driver({ name, email, phone, password });
    await newDriver.save();
    console.log("✅ Driver created:", newDriver);
    res.status(201).json({ message: "Signup successful" });
  } catch (err) {
    console.error("❌ Signup error:", err);
    res.status(500).json({ error: "Server error" });
  }
});


// Login Route (updated)
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("🔐 Login attempt:", req.body);

  try {
    const driver = await Driver.findOne({ email });

    if (!driver) {
      console.log("❌ Email not found");
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Plain password check (since you're not using bcrypt)
    if (driver.password !== password) {
      console.log("❌ Incorrect password");
      return res.status(401).json({ message: "Invalid email or password" });
    }

    console.log("✅ Login successful:", driver.email);
    res.status(200).json({ message: "Login successful", driver });
  } catch (err) {
    console.error("❌ Login error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
