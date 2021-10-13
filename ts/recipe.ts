import { IIngredients } from "./ingredient";

export class Recipe {

    private _ingredients: Array<IIngredients> = [];

    constructor(ingredients : IIngredients[]) {
        this._ingredients = ingredients;
    }

    public cook () {
        let output = " ";
        for (const ingredient of this._ingredients) {
            for (let i = 0 ; i < ingredient.quantity ; i++) {
                output += ingredient.name + " \n";
            }
        }
        return output;
    }
}
