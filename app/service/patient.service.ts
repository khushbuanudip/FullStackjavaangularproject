import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Patient } from '../model/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:10000/patients';
  }

  public findAll(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.usersUrl);
  }

  public save(patient: Patient) {
    return this.http.post<Patient>(this.usersUrl, patient);
  }
  public update(patient: Patient,pid:number):Observable<Object>{
   // return this.http.put<Patient>(this.usersUrl/{pid}, patient);
    return this.http.put(`${this.usersUrl}/${pid}`,patient);
  }

  public delete(pid:number):Observable<Object>{
    return this.http.delete(`${this.usersUrl}/${pid}`);
  }
}
