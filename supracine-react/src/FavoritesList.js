import React, { Component } from "react";
import {favorites} from "./Favorites"; 
import FavoriteCard from "./FavoriteCard";
import './SearchMovie.css';
import { Link } from "react-router-dom";

class FavoritesList extends Component{
     render(){
        let favoritesList = []
        if(favorites.length > 0){
            for(let i = 0; i < favorites.length; i++){
                favoritesList.push(
                <Link to={`/movie/${favorites[i]}`} key={favorites[i]+i}>
                    <FavoriteCard movieId={favorites[i]}></FavoriteCard>
                </Link>);
            }
        }else{
            favoritesList = <p>You haven't add any favorite movie.</p>;
        }
        
        return(
            <div>
                <p className="favorites-list-title"><i>My Favorite List</i></p>
                {favoritesList}
            </div>
        );
     }
} 

export default FavoritesList;