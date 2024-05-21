import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-film-list',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent {
  movies: any[] = []; 
  constructor(private router: Router, private movieService: MovieService) {}

  ngOnInit() {
    this.fetchMovies();
  }

  fetchMovies() {
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';

    this.movieService.getMovies(url)
      .then(movies => {
        this.movies = movies.results;
      })
      .catch(error => {
        console.error('Erro ao buscar filmes:', error);
      });
  }

  goToFilmDetail(movieId: number) {
    this.router.navigate(['/film', movieId]);
  }
}