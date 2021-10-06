import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FisioComponent } from './fisio/fisio.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'fisio', component: FisioComponent },
  { path: '**', redirectTo: 'home' },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
