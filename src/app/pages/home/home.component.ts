import { Component } from '@angular/core';
// import DataSource from 'devextreme/data/data_source';
import { Hero } from '../../config/hero-type';
@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss'],
  preserveWhitespaces: true,
})
export class HomeComponent {
  // heroDataSource: DataSource
  transform = 'scaleX(1)';
  transformations = [
    {
      key: 'Flip',
      items: [
        { name: '0 degrees', value: 'scaleX(1)' },
        { name: '180 degrees', value: 'scaleX(-1)' },
      ],
    },
    {
      key: 'Rotate',
      items: [
        { name: '0 degrees', value: 'rotate(0)' },
        { name: '15 degrees', value: 'rotate(15deg)' },
        { name: '30 degrees', value: 'rotate(30deg)' },
        { name: '-15 degrees', value: 'rotate(-15deg)' },
        { name: '-30 degrees', value: 'rotate(-30deg)' },
      ],
    },
  ];

  HEROES: Hero[] = [
    { id: 1, name: 'windStorm' },
    { id: 2, name: 'bangbang' },
    { id: 3, name: 'guoguo' },
    { id: 4, name: 'hengheng' },
    { id: 5, name: 'qiqi' },
    { id: 6, name: 'zhangsan' },
    { id: 7, name: 'xixi' },
    { id: 8, name: 'Dr IQ' },
    { id: 9, name: 'Magma' },
    { id: 10, name: 'Tornado' },
  ];
  constructor() {} // }) // this.heroDataSource = new DataSource({

  search() {
    console.log(`search`);
  }

  createHero() {
    console.log(`hero created`);
  }
}
