import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rating } from './type'
import { recommendationURL, ratingsURL } from './constants';
@Injectable({
  providedIn: 'root'
})
export class RatingsService {

  constructor(private http: HttpClient) { }
  getRecommendationsForUser(user: string):Observable<string[]> {
    return this.http.get<string[]>(recommendationURL, {params: {
      command: "getRecommendationRelatedToSpecifiedUser",
      user: user
    }})
  }
  getRecommendationsForProduct(product: string):Observable<string[]> {
    return this.http.get<string[]>(recommendationURL, {params: {
      command: "getRecommendationRelatedToSpecifiedUser",
      product: product
    }})
  }
  getRatingsByProduct(product: string): Observable<Rating[]> {
    return this.http.get<rating[]>()
  }

}

