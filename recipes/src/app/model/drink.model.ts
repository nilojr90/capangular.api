  export interface Drink {
      idDrink: string;
      strDrink: string;
      strDrinkAlternate?: any;
      strDrinkES: string;
      strDrinkDE: string;
      strDrinkFR: string;
      "strDrinkZH-HANS": string;
      "strDrinkZH-HANT": string;
      strTags: string;
      strVideo: string;
      strCategory: string;
      strIBA: string;
      strAlcoholic: string;
      strGlass: string;
      strInstructions: string;
      strInstructionsES?: any;
      strInstructionsDE: string;
      strInstructionsFR?: any;
      "strInstructionsZH-HANS"?: any;
      "strInstructionsZH-HANT"?: any;
      strDrinkThumb: string;
      strIngredient1: string;
      strIngredient2: string;
      strIngredient3: string;
      strIngredient4: string;
      strIngredient5: string;
      strIngredient6: string;
      strIngredient7?: any;
      strIngredient8?: any;
      strIngredient9?: any;
      strIngredient10?: any;
      strIngredient11?: any;
      strIngredient12?: any;
      strIngredient13?: any;
      strIngredient14?: any;
      strIngredient15?: any;
      strMeasure1: string;
      strMeasure2: string;
      strMeasure3: string;
      strMeasure4: string;
      strMeasure5: string;
      strMeasure6: string;
      strMeasure7?: any;
      strMeasure8?: any;
      strMeasure9?: any;
      strMeasure10?: any;
      strMeasure11?: any;
      strMeasure12?: any;
      strMeasure13?: any;
      strMeasure14?: any;
      strMeasure15?: any;
      strImageSource: string;
      strImageAttribution: string;
      strCreativeCommonsConfirmed: string;
      dateModified: string;
  }

  export interface DrinkApiResponse {
      drinks: Drink[];
  }


