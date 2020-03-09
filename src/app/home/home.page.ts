import { Component } from '@angular/core';
import { DadosService } from '../servicos/dados.service';
import { Router } from '@angular/router';
import { PokedexApiService } from '../servicos/pokedex-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public listaPokemons = [
    {numero: '001', nome: 'Bulbasaur', tipos: ['Grass', 'Poison'], img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'},
    {numero: '002', nome: 'Ivysaur', tipos: ['Grass', 'Poison'], img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png'},
    {numero: '003', nome: 'Venusaur', tipos: ['Grass', 'Poison'], img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png'},
    {numero: '004', nome: 'Charmander', tipos: ['Fire'], img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'},
    {numero: '005', nome: 'Charmeleon', tipos: ['Fire'], img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png'},
    {numero: '006', nome: 'Charizard', tipos: ['Fire', 'Flying'], img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png'},
    {numero: '007', nome: 'Squirtle', tipos: ['Water'], img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png'},
    {numero: '008', nome: 'Wartortle', tipos: ['Water'], img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png'},
    {numero: '009', nome: 'Blastoise', tipos: ['Water'], img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png'},
    {numero: '010', nome: 'Caterpie', tipos: ['Bug'], img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png'},
    {numero: '011', nome: 'Metapod', tipos: ['Bug'], img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png'},
    {numero: '012', nome: 'Butterfree', tipos: ['Bug', 'Flying'], img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png'},
    {numero: '013', nome: 'Weedle', tipos: ['Bug', 'Poison'], img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png'},
    {numero: '014', nome: 'Kakuna', tipos: ['Bug', 'Poison'], img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png'},
    {numero: '015', nome: 'Beedrill', tipos: ['Bug', 'Poison'], img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png'},
    {numero: '025', nome: 'Pikachu', tipos: ['Electric'], img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'},
    {numero: '026', nome: 'Raichu', tipos: ['Electric'], img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png'}
  ];
  public listaFiltrada = [];

  public listaPokemonsApi = [];
  public offsetGeral = 0;
  public limitGeral = 10;
  public paginaAtual = 0;
  public totalPokemons = 0;

  constructor(public dadosService: DadosService, public router: Router, public pokeApi: PokedexApiService) {
    //Busca os pokemons na API quando abre a página 
    this.buscaPokemonApi(this.offsetGeral, this.limitGeral);
  }

  public buscaPokemonApi(offset = 0, limit){
    this.pokeApi.listarPokemons(offset, limit).subscribe(dados => {
      console.log(dados);
      
      //Pega o total de pokemons
      this.totalPokemons = dados['count'];

      //Pega somente a lista com pokemons
      let listaApi = dados['results'];

      //Percorre a lista que veio da API
      for(let item of listaApi){
        //Busca todos os dados do pokemon usando a URL dele
        this.pokeApi.buscarPokemonUrl(item.url).subscribe(dadosPokemon => {
          //Adiciona os dados do pokemon no final da lista
          this.listaPokemonsApi.push(dadosPokemon);
          this.resetarLista();
        });
      }
    });
  }

  public resetarLista(){
    //this.listaFiltrada = this.listaPokemons;

    //ordena a lista pokemon
    this.listaPokemonsApi.sort(function (a, b) {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });


    this.listaFiltrada = this.listaPokemonsApi;

  }

  public abrirDadosPokemon(pokemon: any){
    //Salva os dados no BD virtual
    this.dadosService.setDados('dadosPokemon', pokemon);

    //Abri outra página por programação
    this.router.navigateByUrl('/dados-pokemon');
  }

  public buscarPokemon(evento: any){
    let busca = evento.target.value;

    this.resetarLista();
    
    if(busca && busca.trim() != ''){
      this.listaFiltrada = this.listaFiltrada.filter(dados => {
        if(dados.nome.toLowerCase().indexOf(busca.toLowerCase()) > -1){
          return true;
        }
        if(dados.numero.indexOf(busca) > -1){
          return true;
        }
        return false;
      })
    }
  }
}
