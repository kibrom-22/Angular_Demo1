import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Employee } from './employee';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'directive',component:DirectiveDemoComponent},
  {path:'pipe',component:PipeDemoComponent},
  {path:'mobile',component:MobilesComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
