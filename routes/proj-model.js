const db = require('../config');

const find = async () => {

    const projects =  await db("Projects")
    .select('ID as project-id', 'project_name', 'description')
    // console.log(projects)
    return projects
    
}

module.exports = {
    find,
}