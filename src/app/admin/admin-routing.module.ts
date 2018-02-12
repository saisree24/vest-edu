import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LoanRequestsComponent } from './loan-requests/loan-requests.component';

const routes: Routes = [
  { path: '', component: AdminDashboardComponent },
  { path: 'loans', component: LoanRequestsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
