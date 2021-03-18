import {Component, Input, OnInit} from '@angular/core';
import {PokemonDetail} from '../pokemon';
import {PokeShareInfoService} from '../poke-share-info.service';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css']
})
export class PokemonInfoComponent implements OnInit {

  @Input('detail')
  detail: PokemonDetail;

  constructor(private pokeShareService: PokeShareInfoService) {
  }

  ngOnInit(): void {
    this.pokeShareService.getObservable().subscribe(e => console.log(e));
  }

  getIndex(): number {
    if (this.detail.game_indices.slice(-1).pop()) {
      return this.detail.game_indices.slice(-1).pop().game_index;
    } else {
      return undefined;
    }
  }

  getAbilities(hidden: boolean): string[] {
    if (this.detail.abilities.filter(ab => hidden ? ab.is_hidden : !ab.is_hidden)) {
      return this.detail.abilities.filter(ab => hidden ? ab.is_hidden : !ab.is_hidden).map(ab => ab.ability.name);
    } else {
      return undefined;
    }
  }

  getTypes(): string[] {
    if (this.detail.types) {
      return this.detail.types.map(type => type.type.name);
    } else {
      return undefined;
    }
  }

}
