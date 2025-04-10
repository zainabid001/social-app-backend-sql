const express = require("express");
const router = express.Router();
const db = require("../models/index");
const Users = db.User;

const create = async(req, res) => {
    try {
        const {name, email, mobile, password,  image} = req.body;
        const user = await Users.create({name, email,  mobile, password, image});
        return res.status(200).json({
            message:  "Success",
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

module.exports= {create}