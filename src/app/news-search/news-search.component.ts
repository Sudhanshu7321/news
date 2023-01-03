import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';


@Component({
  selector: 'app-news-search',
  templateUrl: './news-search.component.html',
  styleUrls: ['./news-search.component.css']
})
export class NewsSearchComponent implements OnInit {

  news: any[] = [];
  search: string = '';
  searchNews: string = '';
  today: number = Date.now();
  constructor(private newsService: NewsService) {
    this.defaultNews();
  }

  defaultNews() {
    this.newsService.getSportNews().subscribe(
      (res: any) => {
        this.news = res.articles;
      },
      (err) => {
        alert('Error in API');
      }
    );

  }

  SearchHandler() {
    this.newsService.getSearchNews(this.search).subscribe(
      (res: any) => {
        this.news = res.articles;
        this.searchNews = this.search;
      },
      (err) => {
        alert('Error in API');
      }
    );
  }

  searchCoseHandler() {
    this.searchNews = ''
    this.search = ''
    this.defaultNews();

  }
  ngOnInit(): void {

  }

}
