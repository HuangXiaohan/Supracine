import React, {Component} from 'react';
import MovieList from './MovieList';
import './SearchMovie.css';
import PageOption from './PageOption';
import { Route, Link, Switch } from 'react-router-dom';

class SearchMovie extends Component{

    constructor(props){
        super(props);
        this.state = {
            searchTitle: "hero",
            searchYear: 2020,
            searchType: "movie",
            movieList: [],
            totalResults: 0
        };

        this.searchMovie = this.searchMovie.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    componentDidMount() {
        this.searchMovie(1);
    }

    componentWillUnmount(){
    }

    
    render(){
        return(
            <div>  
                <div className="search-field">
                    <span>Title: </span><input type="text" name="searchTitle" value={this.state.searchTitle} onChange={this.handleChange}/>
                    <span>Year: </span><input type="text" name="searchYear" value={this.state.searchYear} onChange={this.handleChange}/>
                    <span>Type: </span>
                    <select value={this.state.searchType} name="searchType" onChange={this.handleChange}>
                        <option value="movie">Movie</option>
                        <option value="series">Series</option>
                        <option value="episode">Episode</option>
                        <option value="">All</option>
                    </select>
                    <Link to={{pathname : `/search/${this.state.searchTitle}/${this.state.searchYear}/${this.state.searchType}`}}>
                        <button type="submit" onClick={this.searchMovie.bind(this,1)}>Search</button>
                    </Link>
                </div>
                <Switch>
                    <Route path="/search">
                        <div className="movie-list">
                            <MovieList movieList={this.state.movieList}/>
                        </div>
                    </Route>
                    <Route path="/search/:t/:y/:type">
                        <div className="movie-list">
                            <MovieList movieList={this.state.movieList}/>
                        </div>
                    </Route>
                </Switch>
                
                <div className="clear" ></div> 
                <div className="page-option">
                    <PageOption total={this.state.totalResults} selectPage={this.searchMovie}/>
                </div>
            </div>
        );
    }

    searchMovie(page){
        var source = "http://www.omdbapi.com/?s=" + this.state.searchTitle + "&y=" + this.state.searchYear + "&type=" + this.state.searchType + "&page=" + page + "&apikey=4eacbfee";
        fetch(source)
            .then(res => res.json())
            .then(
                (result) => {
                    if(result.Response === "False"){
                        this.setState({
                            movieList: [],
                            totalResults: 0
                        },()=>alert("Error! "+ result.Error));
                    }
                    this.setState({
                        movieList: result.Search,
                        totalResults: result.totalResults
                    });
                },
                (error) => {
                    this.setState({
                        movieList: [],
                        totalResults: 0
                    },()=>alert("Error! "));
                }
            );
    }

    handleChange(e){
        let {name: fieldName, value} = e.target;

        this.setState({
            [fieldName]: value
        });
    }
}

export default SearchMovie;