import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginUserComponent {
  //user = new User();
  adminId:number = 0;
  adminPass:string = '';
  message = "Signin pls..";
  //private userService:UserService,
  constructor( private router:Router ){}

  loginEmployee(form: NgForm){
    // this.userService.getById(this.id).subscribe(data => {
    //   console.log(data);
      
     // if(data.userPass == this.adminPass)
     if( this.adminPass=="admin" && this.adminId==1234)
        this.router.navigate(['doctors']);
      else

        this.router.navigate(['login']);
        //alert("Sorry!! Invalid Credentials...");
        this.message = "Sorry!! Invalid Credentials";
        form.resetForm();
    // });
    
  }
  Id(Id: any) {
    throw new Error('Method not implemented.');
  }

}

