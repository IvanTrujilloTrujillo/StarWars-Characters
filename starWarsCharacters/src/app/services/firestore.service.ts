import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  public username: string | null = '';

  constructor() { }

  logout(): void {
    localStorage.removeItem('username');
    this.username = '';
  }
}
