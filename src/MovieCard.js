import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './SearchMovie.css';

class MovieCard extends Component{
    render(){
        return(
            <Link to={{pathname : `/movie/${this.props.movie.imdbID}`, state: { movie: this.props.movie }}}>
                <div className="movie-card">
                    <img className="movie-img" src={this.props.movie.Poster} alt={this.props.movie.Title}></img>
                    <div className="movie-info">
                        <p>{this.props.movie.Title}</p>
                        <p>{this.props.movie.Year}</p>
                    </div>
                </div>
            </Link>
        );
    }
}

export default MovieCard;