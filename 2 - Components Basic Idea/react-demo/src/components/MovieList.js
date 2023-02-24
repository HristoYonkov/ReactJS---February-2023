
import Movie from "./Movie";

const MovieList = (props) => {

    return (
        <div>
            <h2>Movie List</h2>
            
            <Movie 
                movie={props.movies[0]}
            />
            <Movie 
                movie={props.movies[1]}
            />
            <Movie 
                movie={props.movies[2]}
            />
        </div>
    )
}

export default MovieList;