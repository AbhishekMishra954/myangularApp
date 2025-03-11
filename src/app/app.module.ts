import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmpFormComponent } from './emp-form/emp-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ChangeMeDirective } from './shared/change-me.directive';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { ConditionalCompComponent } from './conditional-comp/conditional-comp.component';
import { EmployeerouteguardService } from './services/routeguards/employeerouteguard.service';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmpFormComponent,
    ReactiveFormComponent,
    ChangeMeDirective,
    PagenotfoundComponent,
    StudentDetailsComponent,
    ConditionalCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule
  ],
  providers: [EmployeerouteguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
