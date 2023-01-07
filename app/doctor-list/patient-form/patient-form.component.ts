import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/model/patient';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent {

  patient: Patient ;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private patientService: PatientService) {
    this.patient = new Patient();
  }

  onSubmit() {
    this.patientService.save(this.patient).subscribe(result => this.gotoPatientList());
  }

  gotoPatientList() {
    this.router.navigate(['./doctors']);
  }
}
