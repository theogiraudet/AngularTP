import { Component, OnInit } from '@angular/core';
import {Pokemon, PokemonDetail} from '../pokemon';
import {PokeapiService} from '../pokeapi.service';

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

  constructor(private pokeapiService: PokeapiService) {
    /*this.pokemons.push(new Pokemon(1, 'Bulbizarre'));
    this.pokemons.push(new Pokemon(2, 'Herbizarre'));
    this.pokemons.push(new Pokemon(3, 'Florizarre'));
    this.pokemons.push(new Pokemon(4, 'Salamèche'));
    this.pokemons.push(new Pokemon(5, 'Reptincel'));
    this.pokemons.push(new Pokemon(6, 'Dracaufeu'));*/
  }

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
  }

}
