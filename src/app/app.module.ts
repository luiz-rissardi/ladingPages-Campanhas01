import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './presentationLayer/components/header/header.component';
import { MaestriBannerComponent } from './presentationLayer/components/maestri-banner/maestri-banner.component';
import { MaestriIconComponent } from './presentationLayer/components/maestri-icon/maestri-icon.component';
import { DescriptionComponent } from './presentationLayer/components/description/description.component';
import { ApresentationComponent } from './presentationLayer/components/apresentation/apresentation.component';
import { ResumeComponent } from './presentationLayer/components/resume/resume.component';
import { FooterComponent } from './presentationLayer/components/footer/footer.component';
import { CoursesComponent } from './presentationLayer/components/courses/courses.component';
import { CoursesCardsComponent } from './presentationLayer/components/courses-cards/courses-cards.component';
import { HomeComponent } from './presentationLayer/pages/home/home.component';
import { CheckoutComponent } from './presentationLayer/pages/checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PaymentComponent } from './presentationLayer/pages/payment/confirm.component';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './presentationLayer/components/loader/loader.component';
import { InstitutionalComponent } from './presentationLayer/pages/institutional/institutional.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MaestriBannerComponent,
    MaestriIconComponent,
    DescriptionComponent,
    ApresentationComponent,
    ResumeComponent,
    FooterComponent,
    CoursesComponent,
    CoursesCardsComponent,
    HomeComponent,
    CheckoutComponent,
    PaymentComponent,
    LoaderComponent,
    InstitutionalComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }