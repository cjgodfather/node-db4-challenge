exports.seed = function(knex) {
  return knex("instructions").insert([
    { recipe_id: 1, description: "1" },
    { recipe_id: 1, description: "2" },
    { recipe_id: 2, description: "3" },
    { recipe_id: 2, description: "4" },
    { recipe_id: 2, description: "5" },
    { recipe_id: 3, description: "6" },
    { recipe_id: 3, description: "7" },
    { recipe_id: 3, description: "8" },
    { recipe_id: 3, description: "9" },
    { recipe_id: 4, description: "10" },
    { recipe_id: 4, description: "11" },
    { recipe_id: 4, description: "12" },
    { recipe_id: 5, description: "13" },
    { recipe_id: 5, description: "14" },
    { recipe_id: 5, description: "15" }
  ]);
};
