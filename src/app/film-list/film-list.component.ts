import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { CommonModule } from '@angular/common'; 
import { Movie } from '../interfaces/movie.interface';

@Component({
  selector: 'app-film-list',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent {
  movies: Movie[] = [];
  currentPage = 1;
  moviesPerPage = 8;
  totalPages = 1;

  constructor(private router: Router, private movieService: MovieService) {}

  ngOnInit() {
    this.fetchMovies();
  }

  fetchMovies() {
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt&page=1&sort_by=popularity.desc';

    this.movieService.getMovies(url)
      .then(movies => {
        this.movies = movies.results;
        this.totalPages = Math.ceil(this.movies.length / this.moviesPerPage);
      })
      .catch(error => {
        console.error('Erro ao buscar filmes:', error);
      });
  }
  trackByMovieId(index: number, movie: Movie) {
    return movie.id; 
  }
  goToFilmDetail(movieId: number) {
    this.router.navigate(['/film', movieId]);
  }
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
}