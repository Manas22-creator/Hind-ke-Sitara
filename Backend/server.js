// Import required packages
require('dotenv').config(); // Loads environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bcrypt = require('bcryptjs');
const cors = require('cors'); // ✅ Added CORS

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// --- Middleware ---
app.use(express.json()); // To parse JSON bodies

// ✅ Enable CORS
app.use(cors({
    origin: "*", // Allow all origins (good for development)
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

// --- Serve Frontend Files ---
// This tells Express to serve static files (HTML, CSS, JS) from the 'frontend' directory.
app.use(express.static(path.join(__dirname, '../frontend')));

// --- MongoDB Connection ---
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("✅ Successfully connected to MongoDB Atlas!");
}).catch(err => {
    console.error("❌ Connection error", err);
    process.exit();
});

// --- User Schema and Model ---
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true }
});
const User = mongoose.model('User', UserSchema);

// --- API Routes for Authentication ---

// 1. Registration Route
app.post('/api/auth/register', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: "Username and password are required." });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "Username already exists." });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create and save the new user
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "User created successfully! Please log in." });

    } catch (error) {
        res.status(500).json({ message: "Server error during registration.", error: error.message });
    }
});

// 2. Login Route
app.post('/api/auth/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: "Username and password are required." });
        }

        // Find the user
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: "Invalid username or password." });
        }

        // Compare the provided password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid username or password." });
        }

        // On successful login, send back user info (but not the password!)
        res.status(200).json({
            message: "Login successful!",
            username: user.username
        });

    } catch (error) {
        res.status(500).json({ message: "Server error during login.", error: error.message });
    }
});

// --- Start the server ---
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
