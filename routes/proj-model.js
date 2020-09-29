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

const findById = async (ID) => {
    const foundResource = await db("Resources")
        .select("*")
        .where("ID", ID)
    // console.log(foundResource[0])
    return foundResource[0]
}

const projectAssign = async (projID, resourceID) => {

    const newProjectResourceEntry = await db("Proj_Resources")
        .insert({proj_ID: projID, resource_ID: resourceID})

    console.log(newProjectResourceEntry)
}

const addResource = async (resource, projID) => {

    const newResource =  await db("Resources")
        .insert(resource)

    const foundResource = await findById(newResource[0])

    projectAssign(projID, newResource[0])

    return foundResource
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