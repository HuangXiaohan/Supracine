import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit{
    searchTitle : null|string = "";
    searchYear : null|string = "";
    searchType : null|string = "";
    movieList = [];
    totalResults = 0;
    currentPage : null|string = "1";

    types = [
        {value: "movie", name:"Movie"},
        {value: "series", name:"Series"},
        {value: "episode", name:"Episode"},
        {value: "", name:"All"},
    ];

    constructor(private http: HttpClient, 
        private route: ActivatedRoute,
        private router: Router) { 
    }

    ngOnInit() {
        var params = this.route.snapshot.paramMap
        this.searchTitle = params.get('t') ? params.get('t') : "hero";
        this.searchYear = params.get('y') ? params.get('y') : "2020";
        this.searchType = params.get('type') ? params.get('type') : "movie";
        this.currentPage = params.get('page') ? params.get('page') : "1";

        this.searchMovie(this.currentPage);

    }

    setCurrentPage(page : any){
        this.currentPage = page;
        this.router.navigate([`/search/${this.searchTitle}/${this.searchYear}/${this.searchType}/${this.currentPage}`])
        this.searchMovie(page);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    searchMovie(page : any){
        var source = "http://www.omdbapi.com/?s=" + this.searchTitle + "&y=" + this.searchYear + "&type=" + this.searchType + "&page=" + page + "&apikey=4eacbfee";
        this.http.get<any>(source).subscribe({
            next: data => {
                if(data.Response === "False"){
                    alert("Error! "+ data.Error);
                    this.movieList = [];
                    this.totalResults = 0;
                }else{
                    this.movieList = data.Search;
                    this.totalResults = data.totalResults;
                }
            },
            error: error => {
                alert("Error! "+ error);
                this.movieList = [];
                this.totalResults = 0;
            }
        });

    }
}
