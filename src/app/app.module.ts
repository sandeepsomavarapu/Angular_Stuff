import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EmpsComponent } from './emps/emps.component';
import { GenderPipe } from './gender.pipe';
import { FormsModule } from '@angular/forms';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EmpsComponent,
    GenderPipe,
    TemplateDrivenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
