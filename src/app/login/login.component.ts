import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router)
  {

  }
  validate(formData:NgForm)
  {
    if(formData.value.uname==="fisglobal" && formData.value.pswd==="fis@123")
      {
        alert("login success");
        this.router.navigate(['/emps'])
      }
      else{
        alert("Enter Valid Credentials");
      }
  }
}
