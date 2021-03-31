import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'movie-detail',
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./search-movie.component.css']
})
export class MovieDetailComponent implements OnInit{
    movieId : null|string = "";
    movieInfo : any = {};
    rate = "";
    rateStyle = {};

    constructor(private http: HttpClient, 
        private route: ActivatedRoute){
    }

    ngOnInit(){
        this.movieId = this.route.snapshot.paramMap.get('id');
        
        var source = "http://www.omdbapi.com/?i=" + this.movieId + "&apikey=4eacbfee";
        this.http.get<any>(source).subscribe({
            next: data => {
                if(data.Response === "False"){
                    alert("Error! "+ data.Error);
                    this.movieInfo = {};
                }else{
                    this.movieInfo = data;
                    console.log(this.movieInfo)
                    if(data.imdbRating !== "N/A")
                        this.rate = parseFloat(data.imdbRating)*10 + "%";
                    else
                        this.rate = "0%";
                    this.rateStyle = {
                        width : this.rate
                    }
                }
            },
            error: error => {
                alert("Error! "+ error);
                this.movieInfo = {};
            }
        });
    }

    filterText(t : any){
        if(t === "N/A")
            return ""
        else
            return t;
    }
}