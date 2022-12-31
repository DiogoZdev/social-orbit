import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './modules/auth/auth.module';
import { ThemeSelectorComponent } from './components/theme-selector/theme-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemeSelectorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
