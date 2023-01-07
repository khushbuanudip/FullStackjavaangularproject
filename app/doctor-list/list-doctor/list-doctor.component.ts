import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/model/doctor';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-list-doctor',
  templateUrl: './list-doctor.component.html',
  styleUrls: ['./list-doctor.component.css']
})
export class ListDoctorComponent implements OnInit {
  doctors!: Doctor[];
 
  constructor(private doctorService: DoctorService) {
  }

   ngOnInit() {
     this.doctorService.findAll().subscribe(data => {
       this.doctors = data;
    });
   }
}
