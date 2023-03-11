import { useEffect, useState } from "react";
const baseUrl = 'https://swapi.dev/api/people';

export const CharacterList = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch(baseUrl)
            .then((res) => res.json())
            .then((data) => {
                setCharacters(data.results);
            })
    }, [])

    return (
        <>
            <h1>Star Wars Characters</h1>
            <ul>
                {characters.map(x => <div>{x.name}</div>)}
            </ul>
        </>
    );
}