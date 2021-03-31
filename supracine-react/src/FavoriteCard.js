import React, { Component } from "react";
import './SearchMovie.css';

class FavoriteCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            movieInfo : ""
        }
        this.filterText = this.filterText.bind(this);
    }

    componentDidMount(){
        var source = "http://www.omdbapi.com/?i=" + this.props.movieId + "&apikey=4eacbfee";
        fetch(source)
            .then(res => res.json())
            .then(
                (result) => {
                    if(result.Response === "False"){
                        this.setState({
                            movieInfo: ""
                        });
                    }
                    this.setState({
                        movieInfo: result,
                    });
                },
                (error) => {
                    this.setState({
                        movieInfo: ""
                    });
                }
            );
    }

    filterText(t){
        if(t === "N/A")
            return ""
        else
            return t;
    }


    render(){
        return(
            <div className="favorite-card">
                <div className="favorite-img">
                    <img className="movie-img" src={this.state.movieInfo.Poster} alt={this.state.movieInfo.Title}></img>
                </div>
                <div>
                    <p className="favorite-title"><b>{this.state.movieInfo.Title}</b></p>
                    <p className="small"><i>Genre : {this.filterText(this.state.movieInfo.Genre)}</i></p>
                    <p className="small"><i>Director : {this.filterText(this.state.movieInfo.Director)}</i></p>
                    <p className="small"><i>Actors :  {this.filterText(this.state.movieInfo.Actors)}</i></p>
                    <p className="small"><i>Introduction : {this.filterText(this.state.movieInfo.Plot)}</i></p>
                </div>
            </div>
        );
        
    }
}

export default FavoriteCard