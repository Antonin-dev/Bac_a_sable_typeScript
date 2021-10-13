export enum ECategory {
    Meat,
    Vegetable,
    Fruit,
    Bread,
    Cheese
}

export interface IIngredients {
    name: string;
    quantity: number;
    category: ECategory;
    description?: string;
}
