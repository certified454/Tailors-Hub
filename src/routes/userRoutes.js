import express from "express";
import User from "../modules/user.js";

const router = express.Router();

router.post("/users", async (req, res) => {
    const { name, contact } = req.body;

    try {
        if (!name || !contact) {
            return res.status(400).json({ message: "Name and contact are required." });
        };
        if (contact.length < 10) {
            return res.status(400).json({ message: "Contact number must be at least 10 digits long." });
        }
        const newUser = new User({
            name,
            contact 
        });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;