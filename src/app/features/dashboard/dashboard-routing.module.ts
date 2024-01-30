import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path:'',
        redirectTo:'dashboard',
        pathMatch:'full'
      },
      { path: 'dashboard', component: HomeComponent },
      { path: 'expenses', component: ExpensesComponent },
      { path: 'accounts', component: AccountsComponent },
      { path: 'categories', component: CategoriesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
