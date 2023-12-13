const express = require("express");

const mobileRouter = express.Router();

const mobile = require("../modules/model");


mobileRouter.get("/", async (req, res) => {
    try {
        const MobileData = await mobile.find();
        res.send(MobileData);
        // return res.json({ message: "here are home page" })
    } catch (error) {
        console.log(error);
    }
});

mobileRouter.post("/", async (req, res) => {
    try {
       const MobileData = await mobile.create(req.body);
        res.send(MobileData);
    } catch (error) {
        console.log(error);
    }
});


mobileRouter.patch("/", async (req, res) => {
    try {
        return res.json({ message: "here are home page" });
    } catch (error) {
        console.log(error);
    }
});

mobileRouter.delete("/", async (req, res) => {
    try {
        return res.json({ message: "here are home page" });
    } catch (error) {
        console.log(error);
    }
});


module.exports = {mobileRouter};
