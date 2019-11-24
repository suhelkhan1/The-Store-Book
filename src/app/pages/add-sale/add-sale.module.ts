import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSalePageRoutingModule } from './add-sale-routing.module';

import { AddSalePage } from './add-sale.page';
import { InputModule } from 'src/app/components/input/input.module';
import { CoreModule } from 'src/app/core/core.module';
import { SelectModule } from 'src/app/components/select/select.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddSalePageRoutingModule,
    CoreModule,
    InputModule,
    SelectModule
  ],
  declarations: [AddSalePage]
})
export class AddSalePageModule {}
