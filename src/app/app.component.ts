import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <div>Angular</div>
  <nav>
    <a routerLink="">Home</a> <br>
    <a routerLink="/about">About</a>
    <br>
    <a routerLink="/news">News</a> <br>
    <a routerLink="/price">Price</a>


  </nav>
<router-outlet></router-outlet>
  `
})
export class AppComponent {

}
