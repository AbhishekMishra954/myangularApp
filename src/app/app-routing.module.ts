import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmpFormComponent } from './emp-form/emp-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { ConditionalCompComponent } from './conditional-comp/conditional-comp.component';
import { EmployeerouteguardService } from './services/routeguards/employeerouteguard.service';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/components/signin/signin.component';
import { SignupComponent } from './auth/components/signup/signup.component';


const routes: Routes = [
  { path: 'list', component: EmployeeListComponent },
  { path: 'create', component: EmployeeComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  {
    path: 'EmpForm',
    component: EmpFormComponent,
    canDeactivate: [EmployeerouteguardService]

  },
  { path: 'ReactiveForm', component: ReactiveFormComponent },
  { path: 'list/:id', component: StudentDetailsComponent },
  { path: 'conditional', component: ConditionalCompComponent },


  // {
  //   path: 'auth', component: AuthComponent,
  //   children:
  //     [
  //       { path: 'newmodule', component: SigninComponent },
  //       { path: 'signup', component: SignupComponent }

  //     ]
  // },
  {
    path: 'auth',
    component: AuthComponent,
    loadChildren: () => import('./auth/auth.module').then((x) => x.AuthModule),
  },
  { path: '**', component: PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
