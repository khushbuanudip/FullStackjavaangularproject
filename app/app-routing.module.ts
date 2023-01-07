import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentFormComponent } from './doctor-list/appointment-form/appointment-form.component';
import { AppointmentListComponent } from './doctor-list/appointment-list/appointment-list.component';
import { DeletemedicineComponent } from './doctor-list/deletemedicine/deletemedicine.component';
import { DeletepatientComponent } from './doctor-list/deletepatient/deletepatient.component';
import { DoctorFormComponent } from './doctor-list/doctor-form/doctor-form.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { ListDoctorComponent } from './doctor-list/list-doctor/list-doctor.component';
import { MedicineFormComponent } from './doctor-list/medicine-form/medicine-form.component';
import { MedicineListComponent } from './doctor-list/medicine-list/medicine-list.component';
import { PatientFormComponent } from './doctor-list/patient-form/patient-form.component';
import { PatientListComponent } from './doctor-list/patient-list/patient-list.component';
import { UpdatemedicineComponent } from './doctor-list/updatemedicine/updatemedicine.component';
import { UpdatepatientComponent } from './doctor-list/updatepatient/updatepatient.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { LoginUserComponent } from './loginuser/loginuser.component';

 const routes: Routes = [
  { path: 'front', component: FrontpageComponent },

  { path: 'doctors', component: DoctorListComponent,

  children:[{ path: 'adddoctor', component: DoctorFormComponent },
  {path: 'doctorslist', component: ListDoctorComponent},
   { path: 'patients', component: PatientListComponent },
 { path: 'addpatient', component: PatientFormComponent },
   { path: 'updatepatient', component: UpdatepatientComponent },
   { path: 'deletepatient', component: DeletepatientComponent },
   {path: 'appointments', component: AppointmentListComponent },
   { path: 'addappointment', component: AppointmentFormComponent },
 { path: 'medicines', component: MedicineListComponent },
   { path: 'addmedicine', component: MedicineFormComponent },
   { path: 'updatemedicine', component: UpdatemedicineComponent },
   { path: 'deletemedicine', component: DeletemedicineComponent },
  
]},



// { path: 'adduser', component: UserFormComponent },
// { path: 'patients', component: PatientListComponent },
// { path: 'addpatient', component: PatientFormComponent },
// { path: 'updatepatient', component: UpdatepatientComponent },
// { path: 'deletepatient', component: DeletepatientComponent },
// {path: 'appointments', component: AppointmentListComponent },
// { path: 'addappointment', component: AppointmentFormComponent },
// { path: 'medicines', component: MedicineListComponent },
// { path: 'addmedicine', component: MedicineFormComponent },
// { path: 'updatemedicine', component: UpdatemedicineComponent },
// { path: 'deletemedicine', component: DeletemedicineComponent },

{path:"login",component:LoginUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
