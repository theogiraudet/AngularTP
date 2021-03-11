import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../pokemon';
import {PokeapiService} from '../pokeapi.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  id = '';
  filterValue = '';
  pokemons: Pokemon[] = [];

  constructor(private pokeapiService: PokeapiService) {
    /*this.pokemons.push(new Pokemon(1, 'Bulbizarre'));
    this.pokemons.push(new Pokemon(2, 'Herbizarre'));
    this.pokemons.push(new Pokemon(3, 'Florizarre'));
    this.pokemons.push(new Pokemon(4, 'Salamèche'));
    this.pokemons.push(new Pokemon(5, 'Reptincel'));
    this.pokemons.push(new Pokemon(6, 'Dracaufeu'));*/
  }

  ngOnInit(): void {
    this.pokeapiService.getPokemons().subscribe(data => {
      data.results.forEach((e, index) => this.pokemons.push(new Pokemon(index, e.name)));
      console.log(this.pokemons);
    });
  }

  printPokemons(): void {

  }

  onGo(): void {
    document.getElementById('textId').innerText = this.id;
  }

}
