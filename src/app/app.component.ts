import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fis',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  orgName:string='fis global';
  constructor(private router:Router)
  {
    
  }
  logout()
  {
    localStorage.removeItem("uname")
    localStorage.removeItem("password")
    localStorage.clear()
    alert("Logged Out Successfully")
    this.router.navigate(['/login'])
  }
}
