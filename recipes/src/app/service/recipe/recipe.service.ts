import { Recipe, ApiResponse } from '../../model/recipe.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

let header = new HttpHeaders();
header.set('Access-Control-Allow-Origin', '*');


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  header = new HttpHeaders();


  public url = "http://www.recipepuppy.com/api/";

  constructor(private http: HttpClient) {
    this.header.set('Access-Control-Allow-Origin', '*');
    //this.http.options();
  }



  getRecipes(): Observable<ApiResponse>{
      return this.http.get<ApiResponse>(this.url);
  }
}
