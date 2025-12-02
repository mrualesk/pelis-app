import React, {useContext, useEffect, useState} from 'react';
import Title from "./Title.jsx";
import {useParams} from "react-router";
import {PeliculasFavoritasContext} from "../providers/PeliculasFavoritasContext.js";

export default function PeliculaDetalle() {
    const {id} = useParams()

    const {
        addPeliculaFavorita,
        removePeliculaFavorita,
        esFavorita
    } = useContext(PeliculasFavoritasContext)

    const [pelicula, setPelicula] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchPelicula = async () => {
        const response = await fetch(`https://imdb.iamidiotareyoutoo.com/search?tt=${id}`);
        const data = await response.json();
        setPelicula(data)
        setLoading(false)
    }

    useEffect(() => {
        fetchPelicula()
    }, [id]);

    if (!pelicula) return <p>Pelicula No encontrada</p>

    if (loading) return <div>
        Cargando...
    </div>;

    return (
        <div className="mt-10">
            <Title title={`Pelicula - ${pelicula.short.name}`}/>
            <div className="flex justify-center items-center mt-6">
                <div className="rounded-2xl bg-gray-200 p-2 hover:scale-105 transition-all w-[300px] relative">
                    <div className="absolute top-5 right-5">
                        {
                            esFavorita(pelicula.imdbId) ?
                                <img onClick={() => removePeliculaFavorita(pelicula.imdbId)} src="/star-on-icon.svg"
                                     alt="Star" width="30" height="30"/>
                                : <img onClick={() => addPeliculaFavorita(pelicula)} src="/star-off-icon.svg" alt="Star"
                                       width="30" height="30"/>
                        }
                    </div>
                    <img className="rounded-2xl" src={pelicula.short.image} alt="Imagen Pelicula"/>
                    <p className="text-center px-8 pt-4">{pelicula.short.description}</p>
                </div>
            </div>
        </div>
    );
};
