import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Appointment } from '../model/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:10000/appointments';
  }

  public findAll(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.usersUrl);
  }

  public save(appointment: Appointment) {
    return this.http.post<Appointment>(this.usersUrl, appointment);
  }
}
