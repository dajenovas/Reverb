import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModulesModule } from '../shared-modules/shared-modules.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModulesModule
  ]
})
export class HomeModule { }
