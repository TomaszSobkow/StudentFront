
import { DefaultComponent } from './dashboard/layouts/default/default.component';
import { UpdatestudentComponent } from './students/updatestudent/updatestudent.component';
import { ListofstudentsComponent } from './students/listofstudents/listofstudents.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstudentComponent } from './students/addstudent/addstudent.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListofusersComponent } from './users/listofusers/listofusers.component';
import { UpdateuserComponent } from './users/updateuser/updateuser.component';
import { NewRegisterComponent } from './authentication/new-register/new-register.component';
import { NewsignupComponent } from './authentication/newsignup/newsignup.component';

const routes: Routes = [

  { path:'', redirectTo:(`${'signup'}`), pathMatch:'full' },
  { path: 'register', component: NewRegisterComponent},
  { path: 'signup', component: NewsignupComponent},
  { path: 'defaultComponent', component: DefaultComponent,
     children :[
       { path:'', component: DashboardComponent  },
       { path: 'students', component: ListofstudentsComponent},
       { path: 'students/student/:id', component: UpdatestudentComponent },
       { path: 'addstudent', component: AddstudentComponent },
       { path: 'users', component: ListofusersComponent},
       { path: 'users/user/:id', component: UpdateuserComponent},

      ]},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {


 }


