import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/model/patient';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patients!: Patient[];

  constructor(private patientService: PatientService) {
  }

  ngOnInit() {
    this.patientService.findAll().subscribe(data => {
      this.patients = data;
    });
  }

}

