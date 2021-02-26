import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  id = '';
  filterValue = '';
  pokemons: Pokemon[] = [];

  constructor() {
    this.pokemons.push(new Pokemon(1, 'Bulbizarre'));
    this.pokemons.push(new Pokemon(2, 'Herbizarre'));
    this.pokemons.push(new Pokemon(3, 'Florizarre'));
    this.pokemons.push(new Pokemon(4, 'Salamèche'));
    this.pokemons.push(new Pokemon(5, 'Reptincel'));
    this.pokemons.push(new Pokemon(6, 'Dracaufeu'));
  }

  ngOnInit(): void {
  }

  onGo(): void {
    document.getElementById('textId').innerText = this.id;
  }

}
