import { Component, Input} from '@angular/core';

@Component({
    selector: 'movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./search-movie.component.css']
})
export class MovieListComponent{
    @Input() movieList: Array<any> = [];

    constructor(){

    }

} 


