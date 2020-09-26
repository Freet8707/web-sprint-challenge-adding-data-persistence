const db = require('../config');

const find = async () => {

    const projects =  await db("Projects")
    .select('ID as project-id', 'project_name', 'description')
    // console.log(projects)
    return projects
    
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

module.exports = {
    find,
    addResource,
    findResources,
}