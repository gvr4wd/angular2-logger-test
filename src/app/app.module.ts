import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {LOG_LOGGER_PROVIDERS, Logger} from "./shared/logger";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [Logger, LOG_LOGGER_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
