import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

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
        </>
    );
}