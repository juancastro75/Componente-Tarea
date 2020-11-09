import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemodalPageRoutingModule } from './pokemodal-routing.module';

import { PokemodalPage } from './pokemodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemodalPageRoutingModule
  ],
  declarations: [PokemodalPage]
})
export class PokemodalPageModule {}
