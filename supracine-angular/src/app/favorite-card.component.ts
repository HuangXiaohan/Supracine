import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'favorite-card',
    templateUrl: './favorite-card.component.html',
    styleUrls: ['./search-movie.component.css']
  })
export class FavoriteCardComponent implements OnInit{
    @Input() movieId = "";
    movieInfo : any = {};

    constructor(private http: HttpClient){

    }

    ngOnInit(){
        var source = "http://www.omdbapi.com/?i=" + this.movieId + "&apikey=4eacbfee";
        this.http.get<any>(source).subscribe({
            next: data => {
                if(data.Response === "False"){
                    this.movieInfo = {};
                }else{
                    this.movieInfo = data;
                }
            },
            error: error => {
                this.movieInfo = {};
            }
        });
    }

    filterText(t: any){
        if(t === "N/A")
            return ""
        else
            return t;
    }
}