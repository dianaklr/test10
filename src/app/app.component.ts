import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html'
})
export class AppComponent {
  userName: string ="";
  responce:any;

  constructor(private http: HttpClient) {
  }
  search(){
    this.http.get('https://api.github.com/users/'+this.userName)
      .subscribe((responce)=>{
        this.responce = responce;
        console.log(this.responce);
      })
  }
}
