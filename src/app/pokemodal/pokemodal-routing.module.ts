import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemodalPage } from './pokemodal.page';

const routes: Routes = [
  {
    path: '',
    component: PokemodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemodalPageRoutingModule {}
