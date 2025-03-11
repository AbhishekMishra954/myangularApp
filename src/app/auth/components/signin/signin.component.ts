import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: false,

  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent implements OnInit {
  userid: string = '';
  constructor(private _activateRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this._activateRoute.parent?.params.subscribe((param) => {
      console.log(param);
      this.userid = param['id'];
    });
  }
}
