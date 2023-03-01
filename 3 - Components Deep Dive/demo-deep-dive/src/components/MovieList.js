import { createElement } from "react";
import Movie from "./Movie";

export default function MovieList({
    movies,
    onMovieDelete,
    movieSelected,

}) {
    // let movieElements = [];
    // for (const movie of movies) {
    //     // movieElements.push(createElement(Movie, movie));
    //     movieElements.push(<li><Movie {...movie} /></li>);
    // }

    // let movieList = movies.map(movie => <li><Movie {...movie} /></li>);

    return (
        <ul>
            {movies.map(movie => (
                <li key={movie.id}>
                    <Movie {...movie} onMovieDelete={onMovieDelete} movieSelected={movieSelected} />
                </li>
            ))}
        </ul>
    );
}