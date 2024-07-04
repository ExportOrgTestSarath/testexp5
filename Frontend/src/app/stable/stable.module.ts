import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StableRoutingModule } from './stable-routing.module';
import { StableBaseModule } from '@baseapp/stable/stable.base.module';
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    StableBaseModule,
    StableRoutingModule
    
  ],
  exports: [
      StableBaseModule,
  ]

})
export class StableModule  { }