import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {
  constructor() { }
  onSubmit(data:NgForm)
  {
    console.log(data)
    console.log(data.value)
    alert(data.value.id)
    alert(data.value.name)
    alert(data.value.salary)
    alert(data.value.phonenumber)
    alert(data.value.company)

  }
  

}
