import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/model/appointment';
import { Doctor } from 'src/app/model/doctor';
import { Patient } from 'src/app/model/patient';
import { AppointmentService } from 'src/app/service/appointment.service';
import { DoctorService } from 'src/app/service/doctor.service';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent {
  user: Doctor;
  users!: Doctor[];
  patients!: Patient[];
  patient: Patient;
  appointment:Appointment;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private doctorService: DoctorService, private patientService: 
        PatientService, private appointmentService: AppointmentService) {
    this.user = new Doctor();
    this.patient = new Patient();
    this.appointment = new Appointment();
    
        }

        onDoctorSelect(option:any){
          this.user.name = option.target.value;
        }

        onPatientSelect(option:any){
          this.patient.pname = option.target.value;
        }
 // }
   ngOnInit(): void {
    
       this.doctorService.findAll().subscribe(data => {
        this.users = data;
       });
       this.patientService.findAll().subscribe(data => {
         this.patients = data;
       });
    }
  

  onSubmit() {
    this.appointment.dname=this.user.name;
    this.appointment.pname=this.patient.pname;
    this.appointment.date=this.appointment.date.toString();
    this.appointmentService.save(this.appointment).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/doctors']);
  }
}





