import React, {Component} from 'react';
import './SearchMovie.css';

class MovieCard extends Component{
    render(){
        return(
            <div className="movie-card">
                <img className="movie-img" src={this.props.movie.Poster} alt={this.props.movie.Title}></img>
                <div className="movie-content">
                    <p>{this.props.movie.Title}</p>
                    <p>{this.props.movie.Year}</p>
                </div>
            </div>
        );
    }
}

export default MovieCard;