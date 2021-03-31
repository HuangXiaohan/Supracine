import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './homepage.component';
import { SearchMovieComponent } from './search-movie.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieListComponent } from './movie-list.component';
import { PageOption } from './page-option.component';

@NgModule({
  declarations: [
    HomepageComponent,
    SearchMovieComponent,
    MovieListComponent,
    PageOption
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
