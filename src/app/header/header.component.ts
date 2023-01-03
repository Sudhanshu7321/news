import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  a: string = '';
  b: string = '';
  currentRoute: string = '';
  constructor(private router: Router) {
    this.currentRoute = router.url;
    console.log(this.router.url);

  }

  ngOnInit(): void {
  }

}
