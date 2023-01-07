import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Doctor } from '../model/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:10000/users';
  }
  getById(id:number):Observable<Doctor>{
    return this.http.get<Doctor>(`${this.usersUrl}/${id}`);
  }
  public findAll(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.usersUrl);
  }

  public save(doctor:Doctor) {
    return this.http.post<Doctor>(this.usersUrl, doctor);
  }
}
