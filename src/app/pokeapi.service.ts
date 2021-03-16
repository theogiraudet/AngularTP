import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PokemonDetail, PokeServiceRes} from './pokemon';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  readonly url = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private httpService: HttpClient) {

  }

  getPokemons(): Observable<PokeServiceRes> {
    return this.httpService.get<PokeServiceRes>(this.url + '?limit=5000');
  }

  getPokemonInformation(id: string): Observable<PokemonDetail> {
    return this.httpService.get<PokemonDetail>(this.url + '/' + id + '/');
  }
}
