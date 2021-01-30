import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParticiapantService } from '../particiapant.service';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {
  participants:any;
  constructor(private participantService:ParticiapantService, private router:Router) { }

  ngOnInit() {
    this.participantService.getAllParticipants().subscribe(
      
      data => { this.participants = data.participants ;
        console.log(this.participants);
       });
  
  
  }
  Supprimer(id:any)
  {
    this.participantService.deleteParticipant(id).subscribe(
      () =>{ console.log("Participant deleted successfully");
         
            }
    );
  }
  refresh(): void {
    window.location.reload();
}
edit(id:any)
{
  this.router.navigate([`editParticipant/${id}`])

}
    
}
