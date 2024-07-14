import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModulesModule } from "../shared-modules/shared-modules.module";
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about/about.component';


@NgModule({
    declarations: [
        AboutComponent
    ],
    imports: [
        CommonModule,
        AboutRoutingModule,
        SharedModulesModule
    ]
})
export class AboutModule { }
