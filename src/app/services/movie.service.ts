import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = '09ca34b083e00514264db18dd75ea97a';
  private authToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWNhMzRiMDgzZTAwNTE0MjY0ZGIxOGRkNzVlYTk3YSIsInN1YiI6IjY2NGNhODkzY2Q4NGQ4YjRiZjhhMDhkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Uglinwtxfah54GH7_SALbCjZ-M25mznrrwsMlrlBAsg';

  constructor() {}

  getMovies(url: string): Promise<any> {
    return axios.get(url, {
      headers: {
        Authorization: `Bearer ${this.authToken}`
      }
    })
    .then(response => response.data)
    .catch(error => {
      console.error('Erro ao buscar filmes:', error);
      throw error; 
    });
  }

  getMovieById(id: string): Promise<any> {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}`;
    return axios.get(url)
      .then(response => response.data)
      .catch(error => {
        console.error('Erro ao buscar filme:', error);
        throw error;
      });
  }
}