import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  formateurUrl = 'http://localhost:3000';

  constructor(private httpClient:HttpClient) { }
  addFormateur(formateur: any) {
    return this.httpClient.post(`${this.formateurUrl}/addFormateur`, formateur);
  }
  getAllFormateurs() {
    return this.httpClient.get<{ message: string, formateurs: any }>(`${this.formateurUrl}/Formateurs`);
  }
  deleteFormateur(id:any)
  {
    return this.httpClient.delete(`${this.formateurUrl}/deletFormateur/${id}`)

  }
  editFormateur(formateur: any,id:any) {
    return this.httpClient.put(`${this.formateurUrl}/editFormateur/${id}`, formateur);
  }

}
