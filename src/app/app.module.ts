import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@Angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { YelpService  } from './yelp.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [HttpClient, YelpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
