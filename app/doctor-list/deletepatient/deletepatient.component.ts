import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/model/patient';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-deletepatient',
  templateUrl: './deletepatient.component.html',
  styleUrls: ['./deletepatient.component.css']
})
export class DeletepatientComponent {
  patient: Patient ;
  

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private patientService: PatientService) {
    this.patient = new Patient();
  }
  deleteEmployee(empId:string){
    let id = parseInt(empId);
    this.patientService.delete(id).subscribe(result => this.gotoUserList());
  }
  
    gotoUserList() {
      this.router.navigate(['./doctors']);
    }

  

}
 




