import { Component, Input, OnInit } from '@angular/core';
import { SessionService } from 'src/app/session.service';
import { FakesessionitemService } from '../fakesessionitem.service';

@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SessionItemComponent implements OnInit {
@Input() session: any;
  constructor(private sessionItemService: FakesessionitemService , private sessionService:SessionService) { }

  ngOnInit(): void {
  }
  onDelete(id:any)
  {
//this.sessionItemService.delete(this.session);
this.sessionService.deleteSessionService(id).subscribe(
  () =>{ console.log("session deleted successfully");
        }
);
  }
}
