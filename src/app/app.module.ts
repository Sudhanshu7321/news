import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//step 1
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './index/index.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NewsViewComponent } from './news-view/news-view.component';
import { NewsSearchComponent } from './news-search/news-search.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NewsCardComponent,
    ContactUsComponent,
    HeaderComponent,
    FooterComponent,
    NewsViewComponent,
    NewsSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // step 2
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
