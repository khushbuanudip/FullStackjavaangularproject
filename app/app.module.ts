import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginUserComponent } from './loginuser/loginuser.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorFormComponent } from './doctor-list/doctor-form/doctor-form.component';
import { PatientListComponent } from './doctor-list/patient-list/patient-list.component';
import { PatientFormComponent } from './doctor-list/patient-form/patient-form.component';
import { DeletepatientComponent } from './doctor-list/deletepatient/deletepatient.component';
import { UpdatepatientComponent } from './doctor-list/updatepatient/updatepatient.component';
import { ListDoctorComponent } from './doctor-list/list-doctor/list-doctor.component';
import { UpdatemedicineComponent } from './doctor-list/updatemedicine/updatemedicine.component';
import { MedicineFormComponent } from './doctor-list/medicine-form/medicine-form.component';
import { DeletemedicineComponent } from './doctor-list/deletemedicine/deletemedicine.component';
import { MedicineListComponent } from './doctor-list/medicine-list/medicine-list.component';
import { AppointmentFormComponent } from './doctor-list/appointment-form/appointment-form.component';
import { AppointmentListComponent } from './doctor-list/appointment-list/appointment-list.component';
import { UpdateappointmentComponent } from './doctor-list/updateappointment/updateappointment.component';
import { DeleteappointmentComponent } from './doctor-list/deleteappointment/deleteappointment.component';
//import { DoctorList1Component } from './doctor-list/doctor-list1/doctor-list1.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginUserComponent,
    FrontpageComponent,
    DoctorListComponent,
    DoctorFormComponent,
    PatientListComponent,
    PatientFormComponent,
    DeletepatientComponent,
    UpdatepatientComponent,
    ListDoctorComponent,
    UpdatemedicineComponent,
    MedicineFormComponent,
    DeletemedicineComponent,
    MedicineListComponent,
    AppointmentFormComponent,
    AppointmentListComponent,
    UpdateappointmentComponent,
    DeleteappointmentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
