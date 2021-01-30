import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  sessionUrl = 'http://localhost:3000';

  constructor(private httpClient:HttpClient) { }
  addSessionervice(session: any) {
    return this.httpClient.post(`${this.sessionUrl}/addSession`, session);
  }
  getAllSessions() {
    return this.httpClient.get<{ message: string, sessions: any }>(`${this.sessionUrl}/allSessions`);
  }
  deleteSessionService(id:any)
  {
    return this.httpClient.delete(`${this.sessionUrl}/deletSession/${id}`)

  }
  addParticipant(session:any)
  {
    return this.httpClient.put(`${this.sessionUrl}/editSession`, session);

  }
}
