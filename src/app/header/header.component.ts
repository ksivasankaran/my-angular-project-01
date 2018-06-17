import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() aaa;

  constructor() { }

  ngOnInit() {
  }
  onClick(aa){
    console.log('this is your email address')
      }
}
