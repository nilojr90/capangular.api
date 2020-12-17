import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Drink, DrinkApiResponse} from 'src/app/model/drink.model';
import { DrinkService } from 'src/app/service/drink/drink.service';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.css']
})
export class DrinkComponent{
  drinks: Drink[] = [];
  drinkDestaque: Drink;
  destaque = false;

  constructor(
    private drinkService: DrinkService,
    private route: ActivatedRoute,
    private router: Router)
    {
      this.drinkService.getDrinksByFirstLetter("a")
      .subscribe((response)=>{
      this.drinks = response.drinks;
      console.log(this.drinks);
      })

      this.drinkDestaque = this.drinks[1];
    }

   onSelectDrink(drink:string){
      console.log(drink);
      this.drinkService.getDrinksByName(drink)
      .subscribe((response)=>{
      this.drinkDestaque = response.drinks[0];
      console.log(this.drinkDestaque);
      })

      this.destaque = true;
   }

   closeDestaque(){
    this.destaque = false;
   }

}
