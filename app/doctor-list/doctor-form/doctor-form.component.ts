import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/model/doctor';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.css']
})
export class DoctorFormComponent {

  doctor: Doctor;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private doctorService: DoctorService) {
    this.doctor = new Doctor();
  }

  onSubmit() {
    this.doctorService.save(this.doctor).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['./doctors']);
  }
}


