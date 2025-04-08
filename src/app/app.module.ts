
import { DefaultModule } from './dashboard/layouts/default/default.module';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterService } from './services/register.service';
import { NewRegisterComponent } from './authentication/new-register/new-register.component';
import { ListofusersComponent } from './users/listofusers/listofusers.component';
import { UpdateuserComponent } from './users/updateuser/updateuser.component';
import { NewsignupComponent } from './authentication/newsignup/newsignup.component';





@NgModule({ declarations: [
        AppComponent,
        NewRegisterComponent,
        ListofusersComponent,
        UpdateuserComponent,
        NewsignupComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        DefaultModule], providers: [RegisterService, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
