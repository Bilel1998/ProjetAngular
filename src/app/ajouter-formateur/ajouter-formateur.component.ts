import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormateurService } from '../formateur.service';

@Component({
  selector: 'app-ajouter-formateur',
  templateUrl: './ajouter-formateur.component.html',
  styleUrls: ['./ajouter-formateur.component.css']
})
export class AjouterFormateurComponent implements OnInit {
  formateur:any={};

  constructor(private formateurService:FormateurService , private route:Router) { }

  
  ngOnInit(): void {
 
  }
  Ajouter()
  {
    console.log(this.formateur);
    this.formateurService.addFormateur(this.formateur).subscribe(
      () => {
        console.log('added successfully');
       this.route.navigate(['Formateurs']);
      }
    );
  }


}
