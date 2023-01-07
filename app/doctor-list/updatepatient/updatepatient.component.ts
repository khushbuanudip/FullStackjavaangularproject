import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/model/patient';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-updatepatient',
  templateUrl: './updatepatient.component.html',
  styleUrls: ['./updatepatient.component.css']
})
export class UpdatepatientComponent {
  patient: Patient ;
 
  id:any;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private patientService: PatientService) {
    this.patient = new Patient();
  }
  updatePatient(patient:Patient){
    let id = parseInt(patient.pid);
    this.patientService.update(this.patient,id).subscribe(result => {
      console.log("Update patient"+result);
      this.gotoPatientList()});
  }

  gotoPatientList() {
    this.router.navigate(['./doctors']);
  }
  
 
}




