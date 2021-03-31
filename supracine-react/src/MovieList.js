import React, {Component} from 'react';
import MovieCard from './MovieCard';
import './SearchMovie.css';

class MovieList extends Component{
    render(){
        let movies = [];
        if(this.props.movieList){
            for(let i = 0; i < this.props.movieList.length; i++){
                movies.push(<MovieCard movie={this.props.movieList[i]} key={this.props.movieList[i].imdbID+i}/>);
            }
        }
        return <div className="movie-list">{movies}</div>;
    }
}

export default MovieList