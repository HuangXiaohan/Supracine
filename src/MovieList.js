import React, {Component} from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component{
    render(){
        let movies = [];
        if(this.props.movieList){
            for(let i = 0; i < this.props.movieList.length; i++){
                movies.push(<MovieCard movie={this.props.movieList[i]} key={this.props.movieList[i].imdbID+i}/>);
            }
        }
        return movies;
    }
}

export default MovieList