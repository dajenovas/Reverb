import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SharedModulesRoutingModule } from './shared-modules-routing.module';


@NgModule({
  declarations: [
    NavigationComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    SharedModulesRoutingModule
  ],
  exports:[FooterComponent,HeaderComponent,NavigationComponent,CardComponent]
})
export class SharedModulesModule { }
