import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComparateurComponent } from './comparateur/comparateur.component';

const routes: Routes = [
  { path: 'dash', component: DashboardComponent },
  { path: '',   redirectTo: 'dash', pathMatch: 'full'},
  { path: 'comparateur', component: ComparateurComponent }
  // { path: 'edit/:id', component: Vue }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
