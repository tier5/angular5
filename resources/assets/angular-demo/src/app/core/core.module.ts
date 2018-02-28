import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import {LayoutModule} from "./layout/layout.module";
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    CoreRoutingModule,
  ],
  declarations: [CoreComponent],
  exports : [CoreComponent],
})
export class CoreModule { }
