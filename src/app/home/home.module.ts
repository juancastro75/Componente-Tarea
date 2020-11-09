import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { CompComponent } from "../comp/comp.component";
import { PokemodalPage } from "../pokemodal/pokemodal.page";

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, CompComponent, PokemodalPage],
  entryComponents:[CompComponent, PokemodalPage]
})
export class HomePageModule {}
