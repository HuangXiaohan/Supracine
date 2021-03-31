import { Component, OnInit } from '@angular/core';
import {favorites} from './favorites';

@Component({
  selector: 'favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class FavoritesListComponent implements OnInit {
    favorites : Array<any> = [];

    constructor(){

    }

    ngOnInit(){
        this.favorites = favorites;
    }
    
}