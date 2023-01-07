import { Component } from '@angular/core';
import { Medicine } from 'src/app/model/medicine';
import { MedicineService } from 'src/app/service/medicine.service';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css']
})
export class MedicineListComponent {

  medicines!: Medicine[];

  constructor(private medicineService: MedicineService) {
  }

  ngOnInit() {
    this.medicineService.findAll().subscribe(data => {
      this.medicines = data;
    });
  }
}

