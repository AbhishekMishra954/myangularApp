import { Component, ViewChild } from '@angular/core';
import { Employee } from '../employee';
import { NgForm } from '@angular/forms';
console.log('loading emp listing');

@Component({
  selector: 'app-emp-form',
  standalone: false,

  templateUrl: './emp-form.component.html',
  styleUrl: './emp-form.component.css'
})

export class EmpFormComponent {
  @ViewChild('myForm') public createEmpForm!: NgForm;
  public emp = new Employee();
  SaveEmployee(formData: any) {
    console.log(formData.form.value);
    //  var emp=new Employee(formData.value.name,formData.value.age,formData.value.email);
    //  console.log(emp);
  }

  OnChangeCheckbox(e: any) {
    console.log(e);
  }
}
