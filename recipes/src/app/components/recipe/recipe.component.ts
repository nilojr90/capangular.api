import { Recipe } from 'src/app/model/recipe.model';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/service/recipe/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipes: Recipe[] = [];
  data: any;

  constructor(private recipeService: RecipeService) {

     recipeService.getRecipes().subscribe(data => this.data = data);

     console.log(this.data);
   }

  ngOnInit(): void {
  }

}
