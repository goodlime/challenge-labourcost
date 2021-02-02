import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CurrencyPipe  } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PennysToPoundsPipe } from './pipes/pennys-to-pounds.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PennysToPoundsPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  exports: [
    PennysToPoundsPipe
  ],
  providers: [
    CurrencyPipe,
    PennysToPoundsPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
