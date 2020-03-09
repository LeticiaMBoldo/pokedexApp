import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokedexApiService {

  private url = "https://pokeapi.co/api/v2/pokemon"
  
  constructor(public http: HttpClient) { }

  public listarPokemons(offset: Number, limit = 20){
    return this.http.get(`${this.url}/?offset=${offset}&limit=${limit}`);
  }

  public buscaPorNumero(numero: Number){
    return this.http.get(`${this.url}/${numero}`);
  }

  public buscarPokemonUrl(url:string){
    return this.http.get(url);
  }
}