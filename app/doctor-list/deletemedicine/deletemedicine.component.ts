import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicine } from 'src/app/model/medicine';
import { MedicineService } from 'src/app/service/medicine.service';

@Component({
  selector: 'app-deletemedicine',
  templateUrl: './deletemedicine.component.html',
  styleUrls: ['./deletemedicine.component.css']
})
export class DeletemedicineComponent {
  medicine: Medicine ;
  

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private medicineService: MedicineService) {
    this.medicine = new Medicine();
  }
  deleteEmployee(empId:string){
    let id = parseInt(empId);
    this.medicineService.delete(id).subscribe(result => this.gotoUserList());
  }
  
    gotoUserList() {
      this.router.navigate(['./doctors']);
    }

  

}

