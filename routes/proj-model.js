const db = require('../config');

const find = async () => {

    const projects =  await db("Projects")
    .select('ID as project-id', 'project_name', 'description')
    // console.log(projects)
    return projects
    
}

const addProject = async (project) => {
    const newProject = await db("Projects")
        .insert(project)
    
    return newProject
}

const findResources = async () => {

    const resourceList = await db("Resources")
    
    return resourceList
    
}

const addResource = async (resource) => {

    const newResource =  await db("Resources")
        .insert(resource)

    return newResource
}

const findTasks = async () => {

    const taskList = await db("Tasks")
    
    return taskList
    
}

const addTask = async (task) => {

    const newTask =  await db("Tasks")
        .insert(task)

    return newTask
}


module.exports = {
    find,
    addProject,
    addResource,
    findResources,
    findTasks,
    addTask,
}