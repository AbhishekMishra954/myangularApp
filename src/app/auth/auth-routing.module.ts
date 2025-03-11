import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  // {
  // path: 'auth/:id', component: AuthComponent,
  // children:
  //   [
  { path: 'newmodule', component: SigninComponent },
  { path: 'signup', component: SignupComponent }

  //   ]
  //  }


];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
