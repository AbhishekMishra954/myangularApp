import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsServicesService {

  constructor() { }

  getStudents(){
  return  [
      {Id:1,Name:"Abhishek",Age:27},
      {Id:2,Name:"kumar",Age:28},
      {Id:3,Name:"mishraa",Age:29}
    
    ]
  }
}
