const express = require("express");
const burger = require("../models/burger.js")

const router = express.Router();

router.get("/", (req, res) => {
    burger.getAll((data) => {
        res.render("index", { data })
    });
});

router.post("/api/burger", (req, res) => {
    burger.create(req.body.burgerName, (data) => {
        res.redirect("/");
    });
});

router.post("/api/burger/:id", (req, res) => {
    burger.devour(req.params.id, (data) => {
        res.redirect("/");
    });
});

module.exports = router;