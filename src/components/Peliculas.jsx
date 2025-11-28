import {useEffect, useState} from "react";

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
            <h1 className="text-2xl font-bold text-center">Listado de Peliculas</h1>
            <ul className="flex flex-wrap gap-8 mt-10 items-center justify-center">
                {
                    peliculas.map(pelicula =>
                        <li className="w-64 hover:scale-105 transition-all" key={pelicula["#ID"]}>
                            <p className="text-center">{pelicula["#TITLE"]}</p>
                            <img src={pelicula["#IMG_POSTER"]} alt={pelicula["#TITLE"]}/>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};
