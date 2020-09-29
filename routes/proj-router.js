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

router.post("/", async (req, res, next) => {
    try {
        const newProject = await Projects.addProject(req.body)
        res.json(newProject)
    } catch (err) {
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

router.post("/:id/resources", async (req, res) => {
    
    const newResource =  await Projects.addResource(req.body, req.params.id)
    res.json(newResource)
    
})

router.get('/tasks', async (req, res, next) => {
    try {
        const taskList = await Projects.findTasks()
        res.json(taskList)
    } catch(err) {
        next(err)
    }
})

router.post("/tasks", async (req, res, next) => {
    try {
        const newTask = await Projects.addResource(req.body)
        res.json(newTask)
    } catch (err) {
        next(err)
    }
})


module.exports = router;