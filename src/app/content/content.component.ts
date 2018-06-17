import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  gotosite() {
    // window['location'] = document.getElementById("menu")['value']; // JQuery:  $("#menu").val();
  }

}
