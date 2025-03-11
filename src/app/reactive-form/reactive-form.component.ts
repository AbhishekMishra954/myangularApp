import { Component } from '@angular/core';
import { createLinkedSignal } from '@angular/core/primitives/signals';
import { FormControl, FormGroup,Validator, Validators ,FormArray} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: false,
  
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
public hobbies:string[]=['cricket','singing','movies'];
signupForm =  new FormGroup({

name:new FormControl('',[Validators.required]),
age:new FormControl('',[Validators.required]),
email:new FormControl('',[Validators.required]),
gender:new FormControl('',[Validators.required]),
country:new FormControl('',[Validators.required]),
accept:new FormControl(false,[Validators.requiredTrue]),
hobbies:new FormArray([],[Validators.requiredTrue])



  });

  handleSubmit(){
    console.log(this.signupForm);
  }

  get f(){
    return this.signupForm.controls;
  }

  CheckBoxChange(e:any){
    console.log(e.target.value,e.target.checked);
  }
}
