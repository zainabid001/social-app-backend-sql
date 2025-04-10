const express = require("express");
const router = express.Router();
const db = require("../models/index");
const Users = db.User;
const { validationResult } = require("express-validator");

const create = async (req, res) => {
    try {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(401).json({ errors: errors.array() });
        }
        console.log('errors', errors.isEmpty(),)
        const { name, email, mobile, password, image } = req.body;
        const user = await Users.create({ name, email, mobile, password, image });
        return res.status(200).json({
            message: "Success",
            user: user,
        })

    } catch (error) {
        console.error("Error", error);
        return res.status(500).json({
            message: "Failed to create user",
            error: error.message,
        });
    }
}


module.exports = { create, }