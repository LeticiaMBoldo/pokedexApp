import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosPokemonPageRoutingModule } from './dados-pokemon-routing.module';

import { DadosPokemonPage } from './dados-pokemon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosPokemonPageRoutingModule
  ],
  declarations: [DadosPokemonPage]
})
export class DadosPokemonPageModule {}
