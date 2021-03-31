import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './homepage.component';
import { SearchMovieComponent } from './search-movie.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieListComponent } from './movie-list.component';
import { PageOption } from './page-option.component';
import { FavoritesListComponent } from './favorites-list.componnet';
import { FavoriteCardComponent } from './favorite-card.component';
import { MovieDetailComponent } from './movie-detail.component';

@NgModule({
  declarations: [
    HomepageComponent,
    SearchMovieComponent,
    MovieListComponent,
    PageOption,
    MovieDetailComponent,
    FavoritesListComponent,
    FavoriteCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [HomepageComponent]
})
export class AppModule { }
