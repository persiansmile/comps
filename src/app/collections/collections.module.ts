import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../Shared/shared.module';

@NgModule({
  declarations: [CollectionsHomeComponent, TableComponent],
  imports: [CommonModule, CollectionsRoutingModule, SharedModule],
  exports: [],
})
export class CollectionsModule {}
