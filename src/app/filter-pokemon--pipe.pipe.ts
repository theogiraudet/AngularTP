import { Pipe, PipeTransform } from '@angular/core';
import {Pokemon} from './pokemon';

@Pipe({
  name: 'filterPokemonPipe',
  pure: false
})
export class FilterPokemonPipePipe implements PipeTransform {

  transform(value: Pokemon[], searchString?: string): any {
      return value.filter((pok) => pok.name.toLowerCase().includes(searchString.toLowerCase()));
  }

}
