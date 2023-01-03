import { Injectable } from '@angular/core';
// step 3
import { HttpClient } from '@angular/common/http';
HttpClient
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  token: string = "1ac0213d5dce19e517e60d7531afd81f";

  constructor(private http: HttpClient) {

  }
  // getNews() {
  //   return this.http.get('https://newsapi.org/v2/everything?q=tesla&from=2022-11-25&sortBy=publishedAt&apiKey=08424368d3ae4cb683000f0134bb0d00');
  // }
  getNews() {
    return this.http.get('https://gnews.io/api/v4/search?lang=hi&q=example&token=' + this.token + '&lang=en&country=in&max=100');
  }
  getSportNews() {
    return this.http.get('https://gnews.io/api/v4/search?lang=hi&q=jharkhand&country=in&max=100&token=' + this.token + '');
  }
  getSearchNews(keyword: string) {
    return this.http.get('https://gnews.io/api/v4/search?lang=hi&q=' + keyword + '&country=in&max=100&token=' + this.token + '');
  }
}
