import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModsRoutingModule } from './mods-routing.module';
import { ModsHomeComponent } from './mods-home/mods-home.component';
import { ModalComponent } from './modal/modal.component';
import { SharedModule } from '../Shared/shared.module';

@NgModule({
  declarations: [ModsHomeComponent, ModalComponent],
  imports: [CommonModule, ModsRoutingModule, SharedModule],
})
export class ModsModule {}
