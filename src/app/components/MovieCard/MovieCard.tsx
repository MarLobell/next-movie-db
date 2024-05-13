import { Movie, UpdateMovies } from '@/app/types';
import styles from './MovieCard.module.scss';

type MovieProps = {
    movie: Movie;
    updateMovies: UpdateMovies;
    index: number;
    type: "add" | "list";
}

const MovieCard = ({movie, updateMovies, index, type}: MovieProps) => {
    return (
        <div className={styles.movieCard}>
            <div className={[styles.movieCardWrapper, (type === "add" ? styles.greenCard : styles.redCard)].join(' ')} onClick={() => updateMovies(movie, index)} />
            <img className={styles.moviePoster} src={movie.Poster} alt="Movie poster" />
            <a href="www.google.com" target="_blank">
                <h4 className={styles.movieHeader} key={movie.Title}>
                    {movie.Title}
                </h4>
            </a>
            <p>({movie.Year})</p>
        </div> 
    );
}

export default MovieCard;