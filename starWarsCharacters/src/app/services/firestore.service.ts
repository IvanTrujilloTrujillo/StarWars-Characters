import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  public username: string | null = '';

  constructor(
    private firestore: AngularFirestore
  ) {
  }

  logout(): void {
    localStorage.removeItem('username');
    this.username = '';
  }

  saveCharacter(data: {username: String, name: String}): any {
    return this.firestore.collection('favourite_character').add(data);
  }

  getCat(documentId: string): any {
    return this.firestore.collection('cats').doc(documentId).snapshotChanges();
  }
}
