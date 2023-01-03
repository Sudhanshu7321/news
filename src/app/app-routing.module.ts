import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { IndexComponent } from './index/index.component';
import { NewsSearchComponent } from './news-search/news-search.component';
import { NewsViewComponent } from './news-view/news-view.component';

const routes: Routes = [
  { path: 'home', component: IndexComponent },
  { path: '', component: IndexComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'news/:image/:title/:description/:content', component: NewsViewComponent },
  { path: 'news/:title', component: NewsViewComponent },
  { path: 'news-search', component: NewsSearchComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
