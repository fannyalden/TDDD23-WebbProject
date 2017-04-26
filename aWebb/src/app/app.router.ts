import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import {SigninComponent} from './menu/signin/signin.component';



export const router: Routes = [

  {path: '', redirectTo: 'about', pathMatch: 'full'},
  {path: 'signin', component: SigninComponent },

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
