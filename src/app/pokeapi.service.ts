import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Pokemon} from './pokemon';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor(private httpService: HttpClient) {

  }

  getPokemons(): Observable<any> {
    return this.httpService.get('https://pokeapi.co/api/v2/pokemon');
  }

  /*getPokemonInformation(url: string, pokemon: Pokemon[]): void {
    this.httpService.get(url).subscribe(data => pokemon.push(new Pokemon()))
  }*/
}
