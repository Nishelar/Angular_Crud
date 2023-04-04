import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponentComponent } from './add-Employee/add-Employee.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path:"",component:HomePageComponent},
  {path:"addEmployee",component:AddComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
