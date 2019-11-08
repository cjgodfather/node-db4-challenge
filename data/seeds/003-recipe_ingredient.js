exports.seed = function(knex) {
  return knex("recipe_ingredient").insert([
    { recipe_id: 1, ingredient_id: 1, quantity: 5 },
    { recipe_id: 1, ingredient_id: 2, quantity: 6 },
    { recipe_id: 2, ingredient_id: 1, quantity: 2 },
    { recipe_id: 2, ingredient_id: 2, quantity: 5 },
    { recipe_id: 2, ingredient_id: 3, quantity: 2 },
    { recipe_id: 3, ingredient_id: 2, quantity: 5 },
    { recipe_id: 3, ingredient_id: 3, quantity: 5 },
    { recipe_id: 3, ingredient_id: 4, quantity: 4 },
    { recipe_id: 3, ingredient_id: 5, quantity: 9 },
    { recipe_id: 4, ingredient_id: 1, quantity: 12 },
    { recipe_id: 4, ingredient_id: 4, quantity: 8 },
    { recipe_id: 5, ingredient_id: 2, quantity: 2 },
    { recipe_id: 5, ingredient_id: 3, quantity: 1 },
    { recipe_id: 5, ingredient_id: 5, quantity: 6 }
  ]);
};
