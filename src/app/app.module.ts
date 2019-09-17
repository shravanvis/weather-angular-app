import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms"; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APIServiceService } from './weather-api/api-service.service';

import{ FormsModule } from '@angular/forms';
import { WeatherApiComponent } from './weather-api/weather-api.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [APIServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
