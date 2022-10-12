import { Component, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { ApiServiceService } from '../../services/api-service.service';
import Transform from '../../libs/helpers/transform-helper';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.scss']
})
export class DrinkComponent implements OnInit {

  public drink$!: Observable<any>;
  public drinkName: string = 'margarita';
  public drinksTArray?: any[]= [];  

  constructor(private apiService: ApiServiceService) {
    this.drink$ = apiService.searchDrink('margarita').pipe(
      // tap(console.log),
      map( (respT: any)  =>{
        this.drinksTArray = Transform.transformDrink(respT.drinks)
        return respT.drinks;
      }),
    )
  }

  ngOnInit(): void {
  }

  onInput() {
    this.drink$ = this.apiService.searchDrink(this.drinkName).pipe(
      //  tap( (resp) =>{
      //    console.log("TapIni: ", resp)
      // })
      // ,
      map( (respT: any)  =>{
        this.drinksTArray = Transform.transformDrink(respT.drinks)
        console.log("this.drinksTArray", this.drinksTArray)
        return respT.drinks;
      })
      // ,
      //  tap( (resp) =>{
      //    console.log("TapEnd: ", resp)
      // }),
    );
    console.log("obsDrink",this.drink$)
  }

}
