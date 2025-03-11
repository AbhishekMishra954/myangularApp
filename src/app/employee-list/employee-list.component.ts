import { Component, Input, Output, EventEmitter, OnInit, output } from '@angular/core';
import { StudentsServicesService } from '../services/students-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: false,

  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
  providers: [StudentsServicesService]
})
export class EmployeeListComponent implements OnInit {
  @Input() myData: string = '';
  @Input('myNameData') myParentToChildTest: string = '';
  @Output() public childEvent = new EventEmitter();
  public students: any;
  // students=[
  //   {Name:"Abhishek",Age:27},
  //   {Name:"kumar",Age:28},
  //   {Name:"mishra",Age:29}

  // ]


  EventFire() {
    this.childEvent.emit("Appinventiv");

  }
  constructor(private stud: StudentsServicesService, private _router: Router) {
    this.students = stud.getStudents();

  };

  ngOnInit(): void {

  }

  StudentClick(student: any) {

    console.log(student);
    this._router.navigate(['/list', student.Id])
  }
}
