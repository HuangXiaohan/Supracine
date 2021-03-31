import React, { Component } from "react";
import './SearchMovie.css';
import { Link, withRouter } from "react-router-dom";
import {favorites} from "./Favorites";

class MovieDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            movieId : this.props.match.params.id,
            movieInfo: "",
            rate: "",
            rateStyle:{},
            isFavorite: false
        }

        this.filterText = this.filterText.bind(this);
        this.changeFavorite = this.changeFavorite.bind(this);
    }

    componentDidMount(){
        if(favorites.includes(this.state.movieId)){
            this.setState({isFavorite: true});
        }

        var source = "http://www.omdbapi.com/?i=" + this.state.movieId + "&apikey=4eacbfee";
        fetch(source)
            .then(res => res.json())
            .then(
                (result) => {
                    if(result.Response === "False"){
                        this.setState({
                            movieInfo: ""
                        },()=>alert("Error! "+ result.Error));
                    }
                    let rate = "0%";
                    if(result.imdbRating !== "N/A")
                        rate = parseFloat(result.imdbRating)*10 + "%";
                    this.setState({
                        movieInfo: result,
                        rate: rate,
                        rateStyle: {
                            width: rate
                        }
                    });
                },
                (error) => {
                    this.setState({
                        movieInfo: ""
                    },()=>alert("Error!"));
                }
            );
    }


    filterText(t){
        if(t === "N/A")
            return ""
        else
            return t;
    }

    changeFavorite(){
        if(this.state.isFavorite){
            for( var i = 0; i < favorites.length; i++){                        
                if ( favorites[i] === this.state.movieId) { 
                    favorites.splice(i, 1); 
                    i--; 
                }
            }
        }
        else{
            favorites.push(this.state.movieId);
        }

        this.setState({isFavorite : !this.state.isFavorite});
        
        //console.log(favorites);
    }

    render(){
        return(
            <div className="movie-detail">
                <div className="movie-image-div">
                    <img className="movie-img" src={this.state.movieInfo.Poster} alt={this.state.movieInfo.Title}></img>
                </div>
                <div className="movie-content">
                    <p className="movie-title">{this.state.movieInfo.Title}</p>
                    <p className="left"><b>Rating : </b></p>
                    <div className="rate-div">
                        <div className="rate-container">
                            <div className="rate" style={this.state.rateStyle}>{this.state.rate}</div>
                        </div>
                    </div>
                    <div className="vote">{this.state.movieInfo.imdbVotes === "N/A" ? "No votes yet" : this.state.movieInfo.imdbVotes + " votes"}</div>
                    <div className="clear" ></div> 
                    <div className="info">
                        <p><b>Type : </b>{this.state.movieInfo.Type}</p>
                        <p><b>Genre : </b>{this.filterText(this.state.movieInfo.Genre)}</p>
                        <p><b>Year : </b>{this.state.movieInfo.Year}</p>
                        <p><b>Released : </b>{this.filterText(this.state.movieInfo.Released)}</p>
                        <p><b>Country : </b>{this.filterText(this.state.movieInfo.Country)}</p>
                        <p><b>Language : </b>{this.filterText(this.state.movieInfo.Language)}</p>
                        <p><b>RunTime : </b>{this.state.movieInfo.RunTime}</p>
                        <p><b>Director : </b> {this.filterText(this.state.movieInfo.Director)}</p>
                        <p><b>Writer : </b> {this.filterText(this.state.movieInfo.Writer)}</p>
                        <p><b>Actors : </b>  {this.filterText(this.state.movieInfo.Actors)}</p>
                        <p><b>Introduction : </b> {this.filterText(this.state.movieInfo.Plot)}</p>
                    </div>
                    <div className="favorite">
                        <button className={`add-favorite ${this.state.isFavorite ? 'blue-button' : 'red-button' }`} onClick={this.changeFavorite}>{this.state.isFavorite ? "Remove from favorite" : "Add to favorites"}</button>
                        <Link to="/favorites">
                            <p className="favorites-link" href="">My favorites</p>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(MovieDetail);