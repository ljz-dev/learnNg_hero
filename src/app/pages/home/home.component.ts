import { Component } from '@angular/core';
import { HeroService } from 'src/app/shared/services';
// import DataSource from 'devextreme/data/data_source';
import { Hero } from '../../config/hero-type';
@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss'],
  preserveWhitespaces: true,
})
export class HomeComponent {
  // heroDataSource: DataSource

  heroes: Hero[];
  constructor(private heroService: HeroService) {
    this.heroes = this.heroService.getHeroes();
  } // }) // this.heroDataSource = new DataSource({

  search() {
    console.log(`search`);
  }

  add() {
    console.log(`add`);
  }
}
