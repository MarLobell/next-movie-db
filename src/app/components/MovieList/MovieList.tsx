import { Movie, UpdateMovies } from "@/app/types";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./MovieList.module.scss";

type MovieListProps = {
    movies: Movie[];
    updateMovies: UpdateMovies;
    type: "add" | "list";
}

const MovieList = ({movies, updateMovies, type}: MovieListProps) => {
    if (movies !== undefined) {
        return (
            <div className={styles.movieList}>
                {movies.length > 0 ? movies.map((movie: Movie, index: number) =>
                    <MovieCard type={type} updateMovies={updateMovies} key={`${movie.imdbID}${index}`} movie={movie} index={index}/>
                ) : 
                <p>No movies found</p>
                }
            </div>
        );
    }
    return null;
}

export default MovieList;