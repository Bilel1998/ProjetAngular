import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormateurService } from '../formateur.service';
import { ParticiapantService } from '../particiapant.service';

@Component({
  selector: 'app-formateurs',
  templateUrl: './formateurs.component.html',
  styleUrls: ['./formateurs.component.css']
})
export class FormateursComponent implements OnInit {
formateurs:any;
  constructor(private fomateurService:FormateurService, private router:Router) { }

  ngOnInit() {
    this.fomateurService.getAllFormateurs().subscribe(
      
      data => { this.formateurs = data.formateurs ;
        console.log(this.formateurs);
       });
  
  
  }
  Supprimer(id:any)
  {
    this.fomateurService.deleteFormateur(id).subscribe(
      () =>{ console.log("Participant deleted successfully");
         
            }
    );
  }
  refresh(): void {
    window.location.reload();
}
edit(id:any)
{
  this.router.navigate([`editFormateur/${id}`])

}
  

}
