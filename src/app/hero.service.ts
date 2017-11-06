import { Injectable } from '@angular/core';

import {Hero} from './hero-detail/hero'
import {HEROES} from './hero-detail/mock-heroes'

@Injectable()
export class HeroService {

  getHeroes(): Promise<Hero[]>{
    return Promise.resolve(HEROES);
  }

}
