const db = require('../config');

const find = async () => {

    const projects =  await db("Projects")
    console.log(projects)
    return projects
    
}

module.exports = {
    find,
}