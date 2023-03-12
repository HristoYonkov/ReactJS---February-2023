import { useEffect, useState } from "react";
import { useParams, useNavigate, Link, Route, Routes } from "react-router-dom";
import styles from './Navigation.module.css'
import { CharacterFilms } from "./CharacterFilms";
const baseUrl = 'https://swapi.dev/api/people';

export const Character = () => {
    const [character, setCharacter] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        fetch(`${baseUrl}/${id}`)
            .then(res => res.json())
            .then(data => {
                setCharacter(data);
            })
    }, [id]);

    const onBackClick = () => {
        navigate(-1);
    }

    return (
        <>
            <h1>Character Page</h1>
            <p>{character.name}</p>
            <button onClick={onBackClick}>Back</button>

            <nav className={styles.navigation}>
                <li><Link to="films">Films</Link></li>
                <li><Link to="starships">Starships</Link></li>
                <li><Link to="vehicles">Vehicles</Link></li>
            </nav>

            <Routes>
                <Route path="/films" element={<CharacterFilms />} />
                <Route path="/starships" element={<h5>Starships</h5>} />
                <Route path="/vehicles" element={<h5>Vehicles</h5>} />
            </Routes>
        </>
    );
}