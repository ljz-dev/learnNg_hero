import { Injectable } from '@angular/core';
import { HEROES } from 'src/app/config/hero-mock';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}
  getHeroes() {
    return HEROES;
  }
}
