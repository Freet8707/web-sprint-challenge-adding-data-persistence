
exports.up = function(knex) {

    return knex.schema.createTable("Projects", (table) => {

        table.increments("ID")
        table.string("project_name", 128).notNull().unique()
        table.string("description")
        table.boolean("completed_?").notNull().defaultTo(false)

    })

    .createTable("Tasks", (table) => {

        table.increments("ID")
        table.integer("task_number").notNull()
        table.string("description", 128).notNull()
        table.string("notes")
        table.boolean("task_complete_?").notNull().defaultTo(false)
        table.integer("proj_id").notNull().unsigned().references("ID").inTable("Projects")
        
    })

    .createTable("Resources", (table) => {

        table.increments("ID")
        table.string("resource_name", 128).notNull().unique()
        table.string("description")
        
    })

    .createTable("Proj_Resources", (table) => {

        table.integer("proj_ID").notNull().references("ID").inTable("Projects")
        table.integer("resource_ID").notNull().references("ID").inTable("Resources")
        table.primary(["proj_ID", "resource_ID"])
        
    })
  
};

exports.down = function(knex) {

    return knex.schema
        .dropTableIfExists("Proj_Resources")
        .dropTableIfExists("Resources")
        .dropTableIfExists("Tasks")
        .dropTableIfExists("Projects");
    
};
