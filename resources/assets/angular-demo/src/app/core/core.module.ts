import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { CoreRoutingModule } from './core-routing.module';
import {ProfileComponent} from "./profile/profile.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
  ],
  declarations: [CoreComponent, ProfileComponent, DashboardComponent],
  exports : [CoreComponent],
})
export class CoreModule { }
