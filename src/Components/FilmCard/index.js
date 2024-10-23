import { useContext } from "react";


export default function FilmCard () {
    const [films, setFilm] = useContext()


    return (
        <ul>
            {
                films.map((film) => {<li key={film.id}>
                    <p>{film.id}</p>
                    <h2>{film.name}</h2>
                    <img src={}></img>
                </li>})
            }
        </ul>
    );
}