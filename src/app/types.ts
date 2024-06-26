export type Movie = {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string,
}

export type UpdateMovies = (movie: Movie, index: number) => void;