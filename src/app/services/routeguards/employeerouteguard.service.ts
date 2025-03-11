import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { EmpFormComponent } from '../../emp-form/emp-form.component';


@Injectable({
  providedIn: 'root'
})
export class EmployeerouteguardService implements CanDeactivate<EmpFormComponent> {

  constructor() { }

  canDeactivate(component: EmpFormComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if (component.createEmpForm.dirty) {
      return confirm('Are u sure you want to leave page?');
    }
    return true;
  }
}
