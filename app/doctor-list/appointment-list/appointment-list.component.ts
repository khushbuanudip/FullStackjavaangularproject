import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/model/appointment';
import { AppointmentService } from 'src/app/service/appointment.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  appointments!: Appointment[];

  constructor(private appointmentService: AppointmentService) {
  }

  ngOnInit() {
    this.appointmentService.findAll().subscribe(data => {
      this.appointments = data;
    });
  }
}


