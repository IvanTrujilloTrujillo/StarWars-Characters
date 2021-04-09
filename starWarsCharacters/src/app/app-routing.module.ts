import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { FavouriteCharacterComponent } from './components/favourite-character/favourite-character.component';
import { LogInComponent } from './components/log-in/log-in.component';

const routes: Routes = [
  { path: 'login', component: LogInComponent },
  { path: 'home', component: CharactersComponent },
  { path: 'favourite', component: FavouriteCharacterComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
