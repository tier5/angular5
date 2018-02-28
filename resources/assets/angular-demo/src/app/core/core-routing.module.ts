import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import {DashboardComponent} from "./layout/dashboard/dashboard.component";
import {ProfileComponent} from "./layout/profile/profile.component";

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
