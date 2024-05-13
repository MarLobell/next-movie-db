import MovieList from '../MovieList/MovieList';
import styles from './SavedMovies.module.scss';
import { Movie, UpdateMovies } from '@/app/types';

type SavedMoviesProps = {
    movies: Movie[];
    updateMovies: UpdateMovies;
}

const SavedMovies = ({movies, updateMovies}: SavedMoviesProps) => {
    return <section className={styles.savedMoviesSection}>
            <h2 className={styles.savedMoviesHeader}>Saved Movies</h2>
            <MovieList type="list" updateMovies={updateMovies} movies={movies}/>
        </section>
}

export default SavedMovies;