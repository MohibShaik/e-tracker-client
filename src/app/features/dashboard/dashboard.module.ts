import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { DashboardComponent } from './dashboard.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { HomeComponent } from './components/home/home.component';
import { BudgetOverviewComponent } from './components/budget-overview/budget-overview.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    AccountsComponent,
    CategoriesComponent,
    ExpensesComponent,
    BudgetOverviewComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, CoreModule],
  exports: [
    HomeComponent,
    AccountsComponent,
    CategoriesComponent,
    ExpensesComponent,
  ],
})
export class DashboardModule {}
