import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileComponent} from "./profile/profile.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [ProfileComponent, DashboardComponent]
})
export class LayoutModule { }
