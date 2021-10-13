import { Recipe } from "./recipe.js";
import { ECategory } from "./ingredient.js";
var hamburger = new Recipe([
    {
        name: "Buns",
        category: ECategory.Bread,
        quantity: 1
    },
    {
        name: "Steak",
        category: ECategory.Meat,
        quantity: 2
    },
    {
        name: "cheddar",
        category: ECategory.Cheese,
        quantity: 3
    }
]);
document.body.textContent = hamburger.cook();
export * from "./ingredient.js";
export * from "./recipe.js";
