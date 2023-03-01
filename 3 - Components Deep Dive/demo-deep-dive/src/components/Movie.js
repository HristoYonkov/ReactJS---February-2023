import { useEffect } from "react"
import style from './Movie.module.css'

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
    }, [title]);

    useEffect(() => {
        console.log(`Movie - ${title} - Updated!`);
    }, [selected, title]);

    // useEffect(() => {
    //     return () => {
    //         console.log(`Movie - ${title} - Unmounted!`);
    //     }
    // }, []);

    return (
        <article className={style['movie-article']}>
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