import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    private router: Router,
    private firestoreService: FirestoreService
  ) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.firestoreService.logout();
    this.router.navigate(['/login']);
  }
}
