import {useEffect, useState} from "react";
import CardPelicula from "./CardPelicula.jsx";
import Title from "./Title.jsx";

export default function Peliculas() {


    const [peliculas, setPeliculas] = useState([])


    const fetchPeliculas = async () => {
        const response = await fetch('https://imdb.iamidiotareyoutoo.com/search?q=Spiderman');
        const data = await response.json();
        setPeliculas(data.description)
    }

    useEffect(() => {
        fetchPeliculas();
    }, []);


    return (
        <div className="p-10">
            <Title title="Listado de Peliculas !!!" />
            <ul className="flex flex-wrap gap-8 mt-10 items-center justify-center">
                {
                    peliculas.map(pelicula =>
                        <CardPelicula key={pelicula["#ID"]} pelicula={pelicula}/>
                    )
                }
            </ul>
        </div>
    );
};
