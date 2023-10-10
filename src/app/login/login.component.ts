import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username:string;
  password:string;
  constructor(private router:Router)
  {

  }
  validate(formData:NgForm)
  {
   this.username=formData.value.uname;
   this.password=formData.value.pswd;
    if(this.username==="fisglobal" && this.password==="fis@123")
      {
        localStorage.setItem("uname",this.username)
        localStorage.setItem("password",this.password)
        alert("login success");
        this.router.navigate(['/emps'])
      }
      else{
        alert("Enter Valid Credentials");
      }
  }
}
