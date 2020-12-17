import { DrinkApiResponse , Drink} from 'src/app/model/drink.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

let header = new HttpHeaders();
header.set('Access-Control-Allow-Origin', '*');


@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  header = new HttpHeaders();

  public url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?";

  constructor(private http: HttpClient) {
    this.header.set('Access-Control-Allow-Origin', '*');
    //this.http.options();
  }

  getDrinksByFirstLetter(firstLetter:string): Observable<DrinkApiResponse>{
      if(firstLetter.length != 1){
        console.error("Use apenas uma letra");
        return new Observable;
      }
      console.log('getDrinksByFirstLetter');

      return this.http.get<DrinkApiResponse>(this.url+"f="+firstLetter);
  }

  getDrinksByName(name:string): Observable<DrinkApiResponse>{
    console.log('getDrinksByName');

    return this.http.get<DrinkApiResponse>(this.url+"s="+name);
}


}
