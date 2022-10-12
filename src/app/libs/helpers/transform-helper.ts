import { Drink } from '../entity/drink.interface';

export default class Transform {

    public static transformDrink(drinks: any[]): Drink[] {
        let drinkT = drinks.map((drink) => {

            let ingredients: string[] = [];

            Object.keys(drink).forEach(key => {
                if (key.includes("strIngredient") && drink[key]) {
                    ingredients.push(drink[key])
                }
            })

            return {
                name: drink.strDrink,
                img: drink.strDrinkThumb,
                ingredients: ingredients
            };
        })
        // console.log(drinkT)
        return drinkT;
    }

}