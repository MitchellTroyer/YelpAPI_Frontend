import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';


const httpOptions =
{
  headers: new HttpHeaders(
    {
      "Content-Type": "application/json",
      "Authorization" : "Bearer VlbTW4BZbdrSRXpuw5-62pebb4hPeWqm6Ykkmv1RpDpAsr4g2Xqwd5OQk8hNdX3TJI5f93z0PFlQOCCJz7-omojdf95VW2VuGNujrF-_Tw8jfg8EbUu-VpZOJed2XHYx"
    })
}



@Injectable({ 
  providedIn: 'root'
})
export class YelpService 
{
  //private YelpURL = 'https://api.yelp.com/v3/businesses/search?open_now=true&location=';
  private YelpURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?open_now=true&location=';

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  constructor(private http: HttpClient) { }

  getPlace(search?: string ): any
  { 
    return this.http.get(`${this.YelpURL}${search}`, httpOptions)
    .pipe(catchError(this.handleError("get")),tap(place => {return place}))
  }
}
