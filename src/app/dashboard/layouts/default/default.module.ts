
import { ListofstudentsComponent } from '../../../students/listofstudents/listofstudents.component';
import { AddstudentComponent } from '../../../students/addstudent/addstudent.component';
import { NavbarComponent } from './../../../navbar/navbar.component';
import { AppRoutingModule } from './../../../app-routing.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './../../dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { UpdatestudentComponent } from 'src/app/students/updatestudent/updatestudent.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from 'src/app/footer/footer.component';
import { DialogComponent } from 'src/app/dialog/dialog.component';




@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    NavbarComponent,
    AddstudentComponent,
    UpdatestudentComponent,
    ListofstudentsComponent,
    FooterComponent,
    DialogComponent




  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule


  ]
})
export class DefaultModule { }
