import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SessionItemComponent implements OnInit {
//name = "Formation Web";
alignement = "right";
couleur = "red";
@Input() session: any;
@Output() participantsChange = new EventEmitter<any>();
  constructor(private sessionService:SessionService) { }

  ngOnInit(): void {
  }
inscrire(session)
{
  //1-Modifier la valeur de name
  this.session.nom = "Formation Web Avancé";
  //2-Afficher un message sur le console
  console.log('Nouvelle Inscription');
  this.sessionService.addParticipant(session).subscribe(
    () => {
      console.log('modified successfully');
    }
  );
  //3-Incrementer le nombre de participants
  this.session.nbrParticipants = +this.session.nbrParticipants + 1;
  //4-Afficher le nombre de participants sur le console
  console.log(this.session.participants+' Paricipants');
  //Envoyer le NBP au composant parentt
  this.participantsChange.emit(
  {
    value: 20 - this.session.nbrParticipants
  });

  if (this.session.nbrParticipants >=20)
  {
    this.session.isCompleted= true;
  } 

}
}
