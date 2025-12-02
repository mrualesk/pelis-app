import {createRoot} from 'react-dom/client'
import './index.css'
import {createBrowserRouter} from "react-router";
import {RouterProvider} from "react-router/dom";
import Peliculas from "./components/Peliculas.jsx";
import PeliculaDetalle from "./components/PeliculaDetalle.jsx";
import PeliculasFavoritasProvider from "./providers/PeliculasFavoritasProvider.jsx";


const router = createBrowserRouter([
    {
        path: "/peliculas",
        Component: Peliculas,
    },
    {
        path: "/peliculas/:id",
        Component: PeliculaDetalle,
    },
]);

createRoot(document.getElementById('root')).render(
    <PeliculasFavoritasProvider>
        <RouterProvider router={router}/>,
    </PeliculasFavoritasProvider>
)
