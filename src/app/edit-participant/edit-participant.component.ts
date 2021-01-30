import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParticiapantService } from '../particiapant.service';

@Component({
  selector: 'app-edit-participant',
  templateUrl: './edit-participant.component.html',
  styleUrls: ['./edit-participant.component.css']
})
export class EditParticipantComponent implements OnInit {
  participant:any={};
  id:any;
  constructor(private activated:ActivatedRoute,private particpantService:ParticiapantService,private router:Router) { }

  ngOnInit() {
    this.id = this.activated.snapshot.paramMap.get('id')

  }
  Modifier()
  {
    console.log(this.participant)
    this.particpantService.editParticipant(this.participant,this.id).subscribe(
      () => {
        this.router.navigate(['Participants'])
      }
    )
  }
}
