import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './presentationLayer/pages/home/home.component';
import { CheckoutComponent } from './presentationLayer/pages/checkout/checkout.component';
import { PaymentComponent } from './presentationLayer/pages/payment/confirm.component';
import { InstitutionalComponent } from './presentationLayer/pages/institutional/institutional.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path:"checkout",
    component: CheckoutComponent
  },
  {
    path:"payment",
    component: PaymentComponent
  },
  {
    path:"institutional",
    component: InstitutionalComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
