import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormateurService } from '../formateur.service';

@Component({
  selector: 'app-edit-formateur',
  templateUrl: './edit-formateur.component.html',
  styleUrls: ['./edit-formateur.component.css']
})
export class EditFormateurComponent implements OnInit {
  formateur:any={};
  id:any;
  constructor(private activated:ActivatedRoute, private formateurService:FormateurService, private router:Router) { }

  ngOnInit() {
    this.id = this.activated.snapshot.paramMap.get('id')

  }
  Modifier()
  {
    console.log(this.formateur);
    console.log(this.id)
    this.formateurService.editFormateur(this.formateur,this.id).subscribe(
      () => {
        this.router.navigate(['Formateurs'])
      }
    )
  }
}
