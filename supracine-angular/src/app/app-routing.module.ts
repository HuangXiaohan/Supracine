import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesListComponent } from './favorites-list.componnet';
import { MovieDetailComponent } from './movie-detail.component';
import { SearchMovieComponent } from './search-movie.component';

const routes: Routes = [
  { path: '', component: SearchMovieComponent},
  { path: 'search/:t/:y/:type/:page', component: SearchMovieComponent},
  { path: 'movie/:id',  component: MovieDetailComponent},
  { path: 'favorites', component: FavoritesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
