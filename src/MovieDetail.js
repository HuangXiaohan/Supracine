import { Component } from "react";
import './SearchMovie.css';

class MovieDetail extends Component{
    constructor(props){
        super(props);
        this.state = this.props.state;
    }

    render(){
        return(
            <div className="movie-detail">
                <div className="movie-image-div">
                    <img className="movie-img" src="" alt=""></img>
                </div>
                <div className="movie-content">
                    <p>{"this.state.movie.Title"}</p>
                    <p>{"this.state.movie.Year"}</p>
                </div>
            </div>
        );
    }
}

export default MovieDetail;