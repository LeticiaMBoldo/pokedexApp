import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  public listaPokemons = [
    {numero : '001',
     nome: 'Bulbasaur',
     tipos: ['Grass', 'Poison'],
     img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
    },
    {numero:'002',
     nome: 'Ivysaur',
     tipos: ['Grass', 'Poison'],
     img : "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png"
    },
    {numero:'003',
     nome: 'Venusaur',
     tipos: ['Grass', 'Poison'],
     img : "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png"
    },
    {numero:'004',
     nome: 'Charmander',
     tipos: ['Fire'],
     img : "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
    },
    {numero:'005',
     nome: 'Charmeleon',
     tipos: ['Fire'],
     img : "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png"
    },
    {numero:'006',
     nome: 'Charizard',
     tipos: ['Fire', 'Flying'],
     img : "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
    },
    {numero:'025',
     nome: 'Pikachu',
     tipos: ['Eletric'],
     img : "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
    },
    {numero:'026',
     nome: 'Raichu',
     tipos: ['Eletric'],
     img : "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png"
    },
    {numero:'007',
     nome: 'Squirtle',
     tipos: ['Water'],
     img : "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
    },
    {numero:'008',
     nome: 'Wartortle',
     tipos: ['Water'],
     img : "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png"
    },
    {numero:'009',
     nome: 'Blastoise',
     tipos: ['Water'],
     img : "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png"
    }


  ];
  public listaFiltrada = [];

  constructor() {}

}
