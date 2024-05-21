import { Routes } from '@angular/router';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
export const routes: Routes = [
  { path: '', component: FilmListComponent },
  { path: 'film/:id', component: FilmDetailComponent }
];