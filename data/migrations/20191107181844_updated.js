exports.up = function(knex) {
  return knex.schema.createTable("instructions", tbl => {
    tbl.increments();
    tbl
      .integer("recipe_id")
      .unsigned()
      .references("id")
      .inTable("recipes")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    tbl.string("description", 255).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("instructions");
};
