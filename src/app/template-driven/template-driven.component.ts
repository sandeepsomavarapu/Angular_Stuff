import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {
  constructor() { }

  onSubmit(contactForm1:NgForm) {
    console.log(contactForm1)

    alert(contactForm1.value.email);
    alert(contactForm1.value.lastname);
    alert(contactForm1.value.firstname);
    alert(contactForm1.value.country);
    alert(contactForm1.value.gender);
  }
  countryList:country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];
}
export class country {
  id:string;
  name:string;
  constructor(id:string, name:string) {
    this.id=id;
    this.name=name;
  }}