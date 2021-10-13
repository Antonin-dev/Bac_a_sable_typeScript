var Recipe = /** @class */ (function () {
    function Recipe(ingredients) {
        this._ingredients = [];
        this._ingredients = ingredients;
    }
    Recipe.prototype.cook = function () {
        var output = " ";
        for (var _i = 0, _a = this._ingredients; _i < _a.length; _i++) {
            var ingredient = _a[_i];
            for (var i = 0; i < ingredient.quantity; i++) {
                output += ingredient.name + " \n";
            }
        }
        return output;
    };
    return Recipe;
}());
export { Recipe };
