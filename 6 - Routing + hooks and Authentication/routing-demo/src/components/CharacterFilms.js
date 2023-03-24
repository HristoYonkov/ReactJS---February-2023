import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const baseUrl = 'https://swapi.dev/api';

export const CharacterFilms = () => {
    const [films, setFilms] = useState([]);
    const { id } = useParams();



    useEffect(() => {
        fetch(`${baseUrl}/films`)
            .then(res => res.json())
            .then(data => {
                setFilms(data.results)
            })
    }, [id]);

    return (
        <>
            <h1>Character Films</h1>
            {films.map(x => {
                const ids = x.url.split('/').filter(x => x).pop();
                return <li key={ids}><Link to={`/films/${ids}`}>{x.title}</Link></li>
            })}
        </>
    );
}