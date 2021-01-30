import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-session-item-list',
  templateUrl: './session-item-list.component.html',
  styleUrls: ['./session-item-list.component.css']
})
export class SessionItemListComponent implements OnInit {
  sessionItems;
  // sessionItems = [
  //   {
  //   id: 1,
  //   name: 'Web',
  //   track: 'MEAN Stack',
  //   date: new Date('2018-06-13'),
  //   duree: 3,
  //   local: 'Lyon',
  //   participants: 0,
  //   isCompleted: false
  //   },
  //   {
  //   id: 2,
  //   name: 'Mobile',
  //   track: 'Angular et Ionic',
  //   date: new Date('2018-08-10'),
  //   duree: 5,
  //   local: 'Paris',
  //   participants: 0,
  //   isCompleted: false
  //   },
  //   {
  //   id: 3,
  //   name: 'Web',
  //   track: 'NodeJS',
  //   date: new Date('2018-07/20'),
  //   duree: 5,
  //   local: 'Lyon',
  //   participants: 0,
  //   isCompleted: false
  //   },
    
  //   ];
  
  constructor(private SessionService:SessionService) { }

  ngOnInit(): void {
    this.SessionService.getAllSessions().subscribe(
      
      data => { this.sessionItems = data.sessions ;  });
        
      console.log(this.sessionItems);
  }
  

}
