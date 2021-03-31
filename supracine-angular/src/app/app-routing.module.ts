import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './movie-detail.component';
import { SearchMovieComponent } from './search-movie.component';

const routes: Routes = [
  { path: '', component: SearchMovieComponent},
  { path: 'search/:t/:y/:type/:page', component: SearchMovieComponent},
  { path: 'movie/:id',  component: MovieDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
