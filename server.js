const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mysql = require("mysql2");
const app = express();

app.use(express.json());

// Database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "school"
});

// User registration
app.post("/register", async (req, res) => {
    const { username, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    db.query(
        "INSERT INTO users (username, password, role) VALUES (?, ?, ?)",
        [username, hashedPassword, role],
        (err, result) => {
            if (err) return res.status(500).send(err);
            res.status(201).send("User registered!");
        }
    );
});

// User login
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    db.query(
        "SELECT * FROM users WHERE username = ?",
        [username],
        async (err, results) => {
            if (err || results.length === 0)
                return res.status(401).send("Invalid credentials");

            const user = results[0];
            const isValidPassword = await bcrypt.compare(password, user.password);
            if (!isValidPassword) return res.status(401).send("Invalid credentials");

            const token = jwt.sign({ id: user.id, role: user.role }, "SECRET_KEY", {
                expiresIn: "1h"
            });
            res.status(200).json({ token });
        }
    );
});

// Protected route example
app.get("/profile", (req, res) => {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, "SECRET_KEY", (err, user) => {
        if (err) return res.status(403).send("Unauthorized");
        res.status(200).send(`Welcome, ${user.role}`);
    });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
