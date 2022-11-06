import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  // loggIn = false;
  isCollapsed:boolean = true;
  constructor() {


  }
  // @ts-ignore
  // myEvent(event){
  //   console.log(event)
  // }
  toggleCollapse(){
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit(): void {
  }

}
