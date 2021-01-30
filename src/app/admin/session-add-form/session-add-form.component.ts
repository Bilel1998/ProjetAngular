import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/session.service';
import { FakesessionitemService } from '../fakesessionitem.service';

@Component({
  selector: 'app-session-add-form',
  templateUrl: './session-add-form.component.html',
  styleUrls: ['./session-add-form.component.css']
})
export class SessionAddFormComponent implements OnInit {
sessions:any;
  constructor(private sessionItemService: FakesessionitemService , private sessionService: SessionService) { }

  ngOnInit(): void {
  }
addSession(sessionItem) {
console.log(sessionItem);
 this.sessionService.addSessionervice(sessionItem).subscribe(
  () => {
    console.log('added successfully');
  }
);
//this.sessionItemService.add(sessionItem);
}
}
