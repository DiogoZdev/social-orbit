import { NgModule } from '@angular/core';
import { LoginModule } from '../login/login.module';
import { InitialComponent } from './initial.component';

@NgModule({
  declarations: [
    InitialComponent
  ],
  imports: [
    LoginModule,
  ],
  exports: [
    InitialComponent
  ],

})
export class InitialModule { }
