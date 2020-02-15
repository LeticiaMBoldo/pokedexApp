import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosPokemonPage } from './dados-pokemon.page';

const routes: Routes = [
  {
    path: '',
    component: DadosPokemonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosPokemonPageRoutingModule {}
