import { Component } from '@angular/core';
import { YelpService } from './yelp.service';
// import { Dinner } from './dinner';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  private food = [];
  private starsFood = [];
  private dinner = {location:{}, image_url:{}, transactions:[], rating:0};
  private transaction: boolean;
  private ratingView;
  // private dinnerDone: boolean;

  private ratings =
  [
    {value: 1, view: '⭐'},
    {value: 2, view: '⭐⭐'},
    {value: 3, view: '⭐⭐⭐'},
    {value: 4, view: '⭐⭐⭐⭐'},
    {value: 5, view: '⭐⭐⭐⭐⭐'}
  ]

  constructor(private YelpService: YelpService)
  {}

  getPlace(search: string, price: number): void
  {
    event.preventDefault();
    this.transaction = false;
    this.YelpService.getPlace(search)
      .subscribe(place => 
      {this.food = place.businesses
        this.search(price)
        console.log(place)
      }); 
  }

  search(price)
  {
      for(let res of this.food)
      {
        if(res.price == price && res.is_closed == false)
        {
          this.starsFood.push(res);
        }
      }
      console.log(this.starsFood)
      this.displayRandom()
  }

  displayRandom()
  {
    this.dinner = this.starsFood[Math.floor((Math.random()* this.starsFood.length))]
    for(let tran of this.dinner.transactions)
    {
      if(tran == 'delivery')
      {
        this.transaction =true;
      }
    }

    for(let stars of this.ratings)
    {
      if(stars.value == Math.round(this.dinner.rating))
      {
        this.ratingView = stars.view
      }
    }

    this.food = [];
    this.starsFood = [];
    console.log(this.dinner)
  }
}
