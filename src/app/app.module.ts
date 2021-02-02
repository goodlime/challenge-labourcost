import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CurrencyPipe  } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PennysToPoundsPipe } from './pipes/pennys-to-pounds.pipe';
import { DashOnZeroPipe } from './pipes/dash-on-zero.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PennysToPoundsPipe,
    DashOnZeroPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  exports: [
    PennysToPoundsPipe,
    DashOnZeroPipe
  ],
  providers: [
    CurrencyPipe,
    PennysToPoundsPipe,
    DashOnZeroPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
