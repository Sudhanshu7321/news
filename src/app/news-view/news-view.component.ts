import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.css']
})
export class NewsViewComponent implements OnInit {
  news: any;
  id: string = '';
  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.id = history.state;
    console.log(history.state)

    this.news = this.activatedRoute.snapshot.paramMap.get('title');
    // console.log(this.news.title);
  }

}
