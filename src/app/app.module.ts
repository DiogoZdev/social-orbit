import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeSelectorComponent } from './components/theme-selector/theme-selector.component';
import { InitialModule } from './components/initial/initial.module';

@NgModule({
  declarations: [
    AppComponent,
    ThemeSelectorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InitialModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
