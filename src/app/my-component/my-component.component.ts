import { Component, OnInit } from '@angular/core';
import {Pokemon, PokemonDetail} from '../pokemon';
import {PokeapiService} from '../pokeapi.service';
import {PokeShareInfoService} from '../poke-share-info.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  id = '';
  filterValue = '';
  pokemons = new Map<number, Pokemon>();
  details: PokemonDetail;

  constructor(private pokeapiService: PokeapiService, private pokeShareService: PokeShareInfoService) {}


  ngOnInit(): void {
    this.pokeapiService.getPokemons().subscribe(data => data.results.forEach((e, index) =>
      this.pokemons.set(this.getIndex(e.url), new Pokemon(this.getIndex(e.url), e.name.split('-').join(' '))))
    );
  }

  getPokemons(): Pokemon[] {
    return Array.from(this.pokemons.values());
  }

  private getIndex(url: string): number {
    return Number.parseInt(url.split('/').slice(-2).join(''), 10);
  }

  onGo(): void {
    this.pokeapiService.getPokemonInformation(this.id).subscribe(data => this.details = data);
    this.pokeShareService.setValue(this.id);
  }

}
