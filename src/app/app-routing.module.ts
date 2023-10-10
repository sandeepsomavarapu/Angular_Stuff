import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EmpsComponent } from './emps/emps.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ModelDrivenComponent } from './model-driven/model-driven.component';
import { authGuardGuard } from './auth-guard.guard';

const routes: Routes = [

{path:"login",component:LoginComponent},
{path:"register",component:RegisterComponent},
{path:"emps",component:EmpsComponent,canActivate:[authGuardGuard]},
{path:"tform",component:TemplateDrivenComponent},
{path:"mform",component:ModelDrivenComponent},
{path:"",component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
