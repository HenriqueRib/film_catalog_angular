import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-film-list',
  standalone: true,
  imports: [],
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent {
  constructor(private router: Router) {}
  goToFilmDetail() {
    this.router.navigate(['/film/1']);
  }
}
