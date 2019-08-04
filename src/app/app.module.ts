import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { JobCardComponent } from './job-card/job-card.component';
import { JobService } from './job-card/services/job.service';
import { FeedbackCardComponent } from './feedback-card/feedback-card.component';
import { HomeComponent } from './home/home.component';
import { WageCurrencyPipe, ShiftDatePipe} from  './_pipes/index';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    JobCardComponent,
    FeedbackCardComponent,
    WageCurrencyPipe,
    ShiftDatePipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    JobService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
