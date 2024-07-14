import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../about/about/about.component';
import { ContactusComponent } from '../contactus/contactus/contactus.component';
import { ProductPageComponent } from '../products/product-page/product-page.component';


const routes: Routes = [
  {
    path: "products",
    component: ProductPageComponent
  },
  {
    path: "contactus",
    component: ContactusComponent
  },
  {
    path: "about",
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
