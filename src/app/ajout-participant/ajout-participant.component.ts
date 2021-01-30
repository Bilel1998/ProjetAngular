import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParticiapantService } from '../particiapant.service';

@Component({
  selector: 'app-ajout-participant',
  templateUrl: './ajout-participant.component.html',
  styleUrls: ['./ajout-participant.component.css']
})
export class AjoutParticipantComponent implements OnInit {
  participant:any={};
  constructor(private participantService:ParticiapantService, private router:Router) { }

  ngOnInit() {
  }
  Ajouter()
  {
    console.log("******",this.participant);
    this.participantService.addParticiapant(this.participant).subscribe(
      () => {
        console.log('added successfully');
        this.router.navigate(['Participants']);

      }
    );
  };
}
