const express = require('express');

const router = express.Router();

const Projects = require('./proj-model');

router.get("/", async (req, res, next) => {
    try {
        const projects = await Projects.find()
        res.json(projects)
    } catch(err) {
        next(err)
    }

})

module.exports = router;