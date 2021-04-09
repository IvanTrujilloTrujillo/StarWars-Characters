import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { CharactersComponent } from './components/characters/characters.component';
import { CharactersDetailsComponent } from './components/Characters/characters-details/characters-details.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FavouriteCharacterComponent } from './components/favourite-character/favourite-character.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    CharactersComponent,
    CharactersDetailsComponent,
    NavBarComponent,
    FooterComponent,
    FavouriteCharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
