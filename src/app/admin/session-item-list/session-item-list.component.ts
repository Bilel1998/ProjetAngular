import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/session.service';
import { FakesessionitemService } from '../fakesessionitem.service';

@Component({
  selector: 'app-session-item-list',
  templateUrl: './session-item-list.component.html',
  styleUrls: ['./session-item-list.component.css']
})
export class SessionItemListComponent implements OnInit {
  sessionItems;
  constructor(private sessionItemService: FakesessionitemService, private SessionService:SessionService) { }
  ngOnInit(): void {
   // this.sessionItems= this.sessionItemService.get();
    this.SessionService.getAllSessions().subscribe(
      
    data => { this.sessionItems = data.sessions ; console.log(data.message);console.log(data.sessions)  });
    console.log("********",this.sessionItems);

}
  

}
