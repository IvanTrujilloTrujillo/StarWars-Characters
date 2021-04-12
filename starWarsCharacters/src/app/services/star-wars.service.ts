import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  character: number = 1;

  constructor(
    private http: HttpClient
  ) { }

  getCharacter(): Observable<Character> {
    return this.http.get<Character>("https://swapi.dev/api/people/" + this.character + "/");
  }
}

interface Character {
	name: String
}
