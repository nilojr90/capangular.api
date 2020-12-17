  export interface Recipe {
      title: string;
      href: string;
      ingredients: string;
      thumbnail: string;
  }

  export interface ApiResponse {
      title: string;
      version: number;
      href: string;
      results: Recipe[];
  }

