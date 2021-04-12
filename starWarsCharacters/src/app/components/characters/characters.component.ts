import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { StarWarsService } from 'src/app/services/star-wars.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  selectedCharacter: String = "";

  constructor(
    private starWars: StarWarsService,
    private firestore: FirestoreService
  ) { }

  ngOnInit(): void {
    this.starWars.getCharacter().subscribe(result => {
      this.selectedCharacter = result.name;
    });
    localStorage.setItem('username', "IvanTllo");
  }

  previousCharacter(): void {
    this.starWars.character--;
    this.ngOnInit();
  }

  nextCharacter(): void {
    this.starWars.character++;
    this.ngOnInit();
  }

  saveCharacter(): void {
    this.firestore.saveCharacter({username: "IvanTllo", name: this.selectedCharacter});
  }

}
