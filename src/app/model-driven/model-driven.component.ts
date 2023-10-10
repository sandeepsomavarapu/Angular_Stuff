import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css']
})
export class ModelDrivenComponent {
  // This FormGroup contains fullName and Email form controls
  employeeForm: FormGroup;
  constructor() {
    this.employeeForm = new FormGroup({
      fullName: new FormControl(),
      email: new FormControl()
    });
  }
  onSubmit(): void {
    console.log(this.employeeForm)

    console.log(this.employeeForm.controls.fullName.value);
    alert(this.employeeForm.get("email").value);

  }
}