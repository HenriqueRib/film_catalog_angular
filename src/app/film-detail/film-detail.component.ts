// film-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-film-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {
  film: any  = '';
  id: string = '';

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') || '';
      if (this.id) {
        this.movieService.getMovieById(this.id)
          .then(film => {
            this.film = film;
          })
          .catch(error => {
            console.error('Erro ao buscar filme:', error);
          });
      }
    });
  }
  goToHome() {
    this.router.navigate(['/']);
  }
}