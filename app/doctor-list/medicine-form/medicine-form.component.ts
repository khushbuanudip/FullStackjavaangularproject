import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicine } from 'src/app/model/medicine';
import { MedicineService } from 'src/app/service/medicine.service';

@Component({
  selector: 'app-medicine-form',
  templateUrl: './medicine-form.component.html',
  styleUrls: ['./medicine-form.component.css']
})
export class MedicineFormComponent {
  medicine: Medicine ;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private medicineService: MedicineService) {
    this.medicine = new Medicine();
  }

  onSubmit() {
    this.medicineService.save(this.medicine).subscribe(result => this.gotoPatientList());
  }

  gotoPatientList() {
    this.router.navigate(['./doctors']);
  }
}

