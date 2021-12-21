import { Injectable } from '@angular/core'
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api'
import { Hero } from './hero'

@Injectable({
    providedIn: 'root',
})
export class MemoryDataService implements InMemoryDbService {
    constructor() {}

    createDb() {
        const heroes: Hero[] = [
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
        ]
        return heroes
    }

    getId(heroes: Hero[]) {
        if (heroes.length > 0) {
            return Math.max(...heroes.map((hero) => hero.id)) + 1
        } else {
            return 1
        }
    }
}
