import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicine } from 'src/app/model/medicine';
import { MedicineService } from 'src/app/service/medicine.service';

@Component({
  selector: 'app-updatemedicine',
  templateUrl: './updatemedicine.component.html',
  styleUrls: ['./updatemedicine.component.css']
})
export class UpdatemedicineComponent {
  medicine: Medicine ;
  id:any;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private medicineService: MedicineService) {
    this.medicine = new Medicine();
  }
  updatePatient(medicine:Medicine){
    let id = parseInt(medicine.mid);
    this.medicineService.update(this.medicine,id).subscribe(result => {
      console.log("Update patient"+result);
      this.gotoPatientList()});
  }

  gotoPatientList() {
    this.router.navigate(['./doctors']);
  }
  
 
}


