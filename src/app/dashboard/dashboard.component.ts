import { Component, OnInit } from '@angular/core';
import { FormateurService } from '../formateur.service';
import { ParticiapantService } from '../particiapant.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  formateurs: any;
  sessionItems;
  participants: any;
  nbrSessions: any;

  tab = [{ session: "Angular", nbr: 0 }, { session: "NodeJS", nbr: 0 }, { session: "Symphony", nbr: 0 }, { session: "Ionic", nbr: 0 }, { session: "Laravel", nbr: 0 },
  { session: "Android", nbr: 0 }, { session: "Xamarin", nbr: 0 }, { session: "Swift", nbr: 0 }];
  constructor(private SessionService: SessionService, private fomateurService: FormateurService, private participantService: ParticiapantService) { }

  ngOnInit(): void {
    this.SessionService.getAllSessions().subscribe(

      data => {
        this.sessionItems = data.sessions;

        for (let i = 0; i < this.sessionItems.length; i++) {

          for (let j = 0; j < this.tab.length; j++) {
            {
              if (this.tab[j].session === this.sessionItems[i].track)
              {
              
                this.tab[j].nbr =this.tab[j].nbr+ 1;
              }
            }
          }
        }
        console.log(this.tab);

      });
    this.fomateurService.getAllFormateurs().subscribe(

      data => {
        this.formateurs = data.formateurs;
        console.log(this.formateurs);
      });
    this.participantService.getAllParticipants().subscribe(

      data => {
        this.participants = data.participants;
        console.log(this.participants);
      });


    // for (let i = 0; i < this.sessionItems.length; i++) {
    //     this.add(this.sessionItems[i],this.tab);  

    // }
  }
  // add(ch: String, tab: any) {
  //   let b = false
  //   for (let i = 0; this.tab.length; i++) {
  //     if (tab[i].track === ch) {
  //       this.variable.track = ch;
  //       this.variable.nbr = tab[i].nbr + 1;
  //       tab[i] = this.variable;
  //       b = true;
  //     }
  //   }
  //   if (b = false) {
  //     this.variable.track = ch;
  //     this.variable.nbr = +1;

  //     tab.push(this.variable);
  //   }
  // }

}
