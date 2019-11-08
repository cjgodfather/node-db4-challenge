exports.seed = function(knex) {
  return knex("recipes").insert([
    { name: "Home Made Steak" },
    { name: "Tomtao Burger" },
    { name: "kong pao chicken" },
    { name: "taco" },
    { name: "Fried chicken wing" }
  ]);
};
