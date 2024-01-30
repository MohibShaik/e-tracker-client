import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { MaterialModule } from './modules/material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [HeaderComponent, MaterialModule],
})
export class CoreModule {}
