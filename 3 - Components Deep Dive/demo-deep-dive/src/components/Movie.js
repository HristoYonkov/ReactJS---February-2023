import { useEffect } from "react"

export default function Movie({
    id,
    title,
    year,
    plot,
    posterUrl,
    director,
    onMovieDelete,
    movieSelected,
    selected,
}) {
    useEffect(() => {
        console.log(`Movie - ${title} - Mounted!`);
        
        return () => {
            console.log(`Movie - ${title} - Unmounted!`);
        }
    }, []);

    useEffect(() => {
        console.log(`Movie - ${title} - Updated!`);
    }, [selected]);

    // useEffect(() => {
    //     return () => {
    //         console.log(`Movie - ${title} - Unmounted!`);
    //     }
    // }, []);

    return (
        <article>
            <h3>{title}, {year}</h3>
            {selected && <h4>Selected</h4>}
            <main>
                <img src={posterUrl} alt={title} />
                <p>{plot}</p>
            </main>
            <footer>
                <p>Director: {director}</p>
                <button onClick={() => onMovieDelete(id)}>Delete</button>
                <button onClick={() => movieSelected(id)}>Selected</button>
            </footer>
        </article>
    );
}