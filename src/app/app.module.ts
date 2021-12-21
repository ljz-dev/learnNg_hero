import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeroesComponent } from './heroes/heroes.component'
import { HeroDetailComponent } from './hero-detail/hero-detail.component'
import { MessageComponent } from './message/message.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { HttpClientModule } from '@angular/common/http'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { MemoryDataService } from './memory-data.service'

@NgModule({
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        MessageComponent,
        DashboardComponent,
    ],
    imports: [
        BrowserModule, 
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(MemoryDataService, {
            dataEncapsulation: false,
        }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
