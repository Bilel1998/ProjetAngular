import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParticiapantService {

  participantUrl = 'http://localhost:3000';

  constructor(private httpClient:HttpClient) { }
  addParticiapant(participant: any) {
    return this.httpClient.post(`${this.participantUrl}/addParticipant`, participant);
  }
  getAllParticipants() {
    return this.httpClient.get<{ message: string, participants: any }>(`${this.participantUrl}/Participants`);
  }
  deleteParticipant(id:any)
  {
    return this.httpClient.delete(`${this.participantUrl}/deletParticipant/${id}`)

  }
  editParticipant(participant: any,id:any) {
    return this.httpClient.put(`${this.participantUrl}/editParticipant/${id}`, participant);
  }

}