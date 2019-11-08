const express = require("express");
const db = require("./data/db-config");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome to recipes app!");
});

app.get("/api/recipes", (req, res) => {
  db("recipes").then(recipes => res.status(200).json(recipes));
});

app.get("/api/recipes/:id/shoppinglist", (req, res) => {
  db("recipes")
    .join("recipe_ingredient", "recipe_ingredient.recipe_id", "=", "recipes.id")
    .join(
      "ingredients",
      "ingredients.id",
      "=",
      "recipe_ingredient.ingredient_id"
    )
    .select("recipes.name", "ingredients.name", "recipe_ingredient.quantity")
    .where({ "recipes.id": req.params.id })
    .then(list => res.status(200).json(list));
});

app.get("/api/recipes/:id/instructions", (req, res) => {
  db("recipes")
    .join("instructions", "instructions.recipe_id", "=", "recipes.id")
    .select("recipes.name", "instructions.description")
    .where({ "recipes.id": req.params.id })
    .then(list => res.status(200).json(list));
});

module.exports = app;
