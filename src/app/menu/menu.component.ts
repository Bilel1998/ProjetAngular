import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  actualDate:Date;
  constructor() { }

  ngOnInit() {

    this.actualDate = new Date();

  }

}
