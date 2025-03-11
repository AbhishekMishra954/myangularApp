import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-student-details',
  standalone: false,

  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent {
  public studentId: any;
  public studentName: any;
  constructor(private _activatedRoute: ActivatedRoute, private _router: Router) {

  }

  ngOnInit() {
    //let id= this._activatedRoute.snapshot.paramMap.get('id');
    //let name= this._activatedRoute.snapshot.paramMap.get('name');
    this._activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.studentId = id;
    });

    //this.studentName=name;

  }

  PreviousClick() {
    let previousId = parseInt(this.studentId) - 1;
    this._router.navigate(['/list', previousId]);
  }

  NextClick() {
    let nextId = parseInt(this.studentId) + 1;
    this._router.navigate(['/list', nextId]);
  }

}
