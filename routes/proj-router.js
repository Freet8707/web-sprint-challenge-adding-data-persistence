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

router.get('/resources', async (req, res, next) => {
    try {
        const resourceList = await Projects.findResources()
        res.json(resourceList)
    } catch(err) {
        next(err)
    }
})

router.post("/resources", async (req, res, next) => {
    try {
        const newResource = await Projects.addResource(req.body)
        res.json(newResource)
    } catch (err) {
        next(err)
    }
})

module.exports = router;