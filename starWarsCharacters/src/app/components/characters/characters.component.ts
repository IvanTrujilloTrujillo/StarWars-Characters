import { Component, OnInit } from '@angular/core';
import { StarWarsService } from 'src/app/services/star-wars.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  selectedCharacter: String = "";

  constructor(
    private starWars: StarWarsService
  ) { }

  ngOnInit(): void {
    this.starWars.getCharacter().subscribe(result => {
      this.selectedCharacter = result.name;
    });
  }

  previousCharacter(): void {
    this.starWars.character--;
  }

  nextCharacter(): void {
    this.starWars.character++;
  }

  saveCharacter(): void {

  }

}
