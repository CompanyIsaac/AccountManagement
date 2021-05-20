import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountsListComponent } from './components/accounts-list/accounts-list.component';
import { AddAccountComponent } from './components/add-account/add-account.component';

const routes: Routes = [
  { path: '', redirectTo: 'accounts', pathMatch: 'full' },
  { path: 'accounts', component: AccountsListComponent },
  { path: 'add', component: AddAccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
