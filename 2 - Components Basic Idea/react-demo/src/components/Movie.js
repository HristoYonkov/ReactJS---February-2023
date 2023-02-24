const Movie = (props) => {
    return(
        <article>
            <h3>{props.movie.title}</h3>
            <p>{props.movie.year}</p>
            <ul>
                <li>{props.movie.cast[0]}</li>
                <li>{props.movie.cast[1]}</li>
            </ul>
        </article>
    );
}

export default Movie