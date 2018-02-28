import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'

import { UsersEffects } from './store/users/users.effect';
import { CoreComponent } from './core.component';
import { CoreRoutingModule } from './core-routing.module';
import {ProfileComponent} from "./profile/profile.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {usersReducer} from "./store/users/users.reducers";
import { UsersComponent } from './users/users.component';
import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
      HttpClientModule,
    StoreModule.forRoot({usersList : usersReducer}),
    EffectsModule.forRoot([UsersEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  declarations: [CoreComponent, ProfileComponent, DashboardComponent, UsersComponent],
  exports : [CoreComponent],
})
export class CoreModule { }
