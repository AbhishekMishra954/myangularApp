import { Component } from '@angular/core';
import { createLinkedSignal } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-employee',
  standalone: false,
  
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

 public cls="cssBackground cssfont";
 public name="Abhishek Mishraa";
 public myName='Abhishek mishra parent to child testing';

 public msg='';

 fruits: any = ['Apple', 'Banana', 'Cherry', 'Mango', 'Orange'];

  ClickEvent(a:string){
    alert(a);
  }

  OnKeyUpFunction(e: string) {
    console.log(e);
  }

  
}
