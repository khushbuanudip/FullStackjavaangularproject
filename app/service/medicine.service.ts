import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Medicine } from '../model/medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:10000/medicines';
  }

  public findAll(): Observable<Medicine[]> {
    return this.http.get<Medicine[]>(this.usersUrl);
  }

  public save(medicine: Medicine) {
    return this.http.post<Medicine>(this.usersUrl, medicine);
  }
  public update(medicine: Medicine,mid:number):Observable<Object>{
   // return this.http.put<Patient>(this.usersUrl/{mid}, medicine);
    return this.http.put(`${this.usersUrl}/${mid}`,medicine);
  }

  public delete(mid:number):Observable<Object>{
    return this.http.delete(`${this.usersUrl}/${mid}`);
  }
}
