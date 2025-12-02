import React from 'react';
import {Link} from "react-router";

export default function CardPelicula({pelicula}) {
    return (
        <li className="w-64 hover:scale-105 transition-all">
            <p className="text-center">{pelicula["#TITLE"]}</p>
            <Link to={`/peliculas/${pelicula["#IMDB_ID"]}`}>
                <img src={pelicula["#IMG_POSTER"]} alt={pelicula["#TITLE"]}/>
            </Link>
        </li>
    );
};
