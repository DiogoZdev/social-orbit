import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialComponent } from '../../components/initial/initial.component';

const AuthRoutes: Routes = [
  {
    path: '',
    component: InitialComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(AuthRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
