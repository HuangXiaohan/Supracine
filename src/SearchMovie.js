import React, {Component} from 'react';
import MovieList from './MovieList';
import './SearchMovie.css';
import PageOption from './PageOption';
import { Route, Link, withRouter } from 'react-router-dom';

class SearchMovie extends Component{

    constructor(props){
        super(props);
        this.state = {
            searchTitle: this.props.match.params.t ? this.props.match.params.t : "hero",
            searchYear: this.props.match.params.y ? this.props.match.params.y : 2020,
            searchType: this.props.match.params.type ? this.props.match.params.type : "movie",
            currentPage: this.props.match.params.page ? this.props.match.params.page : 1,
            movieList: [],
            totalResults: 0
        };

        this.searchMovie = this.searchMovie.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.setCurrentPage = this.setCurrentPage.bind(this);
    }


    componentDidMount() {
        this.searchMovie(this.state.currentPage);
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
                    <Link to={{pathname : `/search/${this.state.searchTitle}/${this.state.searchYear}/${this.state.searchType}/1`}}>
                        <button type="submit" onClick={this.searchMovie.bind(this,1)}>Search</button>
                    </Link>
                </div>
                <MovieList movieList={this.state.movieList}/>
                <div className="clear" ></div> 
                <div className="page-option">
                    <PageOption total={this.state.totalResults} setCurrentPage={this.setCurrentPage}/>
                </div>
            </div>
        );
    }

    setCurrentPage(page){
        this.setState({
            currentPage : page
        },function(){
            this.searchMovie(page)
            this.props.history.push(`/search/${this.state.searchTitle}/${this.state.searchYear}/${this.state.searchType}/${this.state.currentPage}`);
        });
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
                    },()=>alert("Error! "+ error));
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

export default withRouter(SearchMovie);