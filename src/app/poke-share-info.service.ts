import { Injectable } from '@angular/core';
import {PokemonDetail} from './pokemon';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeShareInfoService {

  constructor() { }

  public subject: Subject<string>;

  getObservable(): Subject<string> {
    return this.subject;
  }

  setValue(value: string) {
    this.subject.next(value);
  }
}
