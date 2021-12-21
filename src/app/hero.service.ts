import { Injectable } from '@angular/core'
import { catchError, Observable, of, map, tap } from 'rxjs'
import { Hero } from './hero'
import { HEROES } from './hero-mock'
import { MessageService } from './message.service'
import { HttpHeaders, HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: 'root',
})
export class HeroService {
    constructor(
        private http: HttpClient,
        private messageService: MessageService
    ) {}

    getHeroes(): Observable<Hero[]> {
        return this.http
            .get<Hero[]>(this.heroesURL)
            .pipe(tap((_) => this.message(`successfullt get data`)))
    }

    getHero(id: number): Observable<Hero> {
        const url = `${this.heroesURL}/${id}`
        return this.http
            .get<Hero>(url)
            .pipe(tap((_) => this.message(`fetched id: ${id}`)))
    }

    private heroesURL = 'api/heroes'

    private message(mes: string) {
        this.messageService.add(`${mes}`)
    }
}
