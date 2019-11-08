exports.seed = function(knex) {
  return knex("ingredients").insert([
    { name: "onions" },
    { name: "olive oil" },
    { name: "tomato" },
    { name: "bread" },
    { name: "lettuce" }
  ]);
};
