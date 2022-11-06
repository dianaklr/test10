import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {Routes, RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { DateComponent } from './date/date.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PriceComponent } from './price/price.component';
import {HttpClientModule} from "@angular/common/http";
import {NewServiceService} from "./new-service.service";
import {FormsModule} from "@angular/forms";


// @ts-ignore
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'price', component: PriceComponent},
  {path: '**', component: NotFoundComponent},
]




@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    HomeComponent,
    AboutComponent,
    NewsComponent,
    NotFoundComponent,
    PriceComponent
  ],

  imports: [
    BrowserModule,
    // @ts-ignore
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule

  ],
  providers: [NewServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
