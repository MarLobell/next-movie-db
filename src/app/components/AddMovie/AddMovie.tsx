"use client";
import { useState } from "react";
import InputField from "../InputField/InputField";
import getMovieData from "../../api/getMovieData";
import MovieList from "../MovieList/MovieList";
import { Movie, UpdateMovies } from "@/app/types";
import styles from "./AddMovie.module.scss";

type AddMovieProps = {
    updateMovies: UpdateMovies;
};

const AddMovie = ({updateMovies}: AddMovieProps) => {
    const [searchedMovies, setSearchedMovies] = useState<Movie[]>([]);

    const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length > 2) {
            setSearchedMovies(await getMovieData(event.target.value));
        }
    }

    return (
        <section className={styles.addMovieSection}>
            <h2 className={styles.addMovieHeader}>Add Movie</h2>
            <InputField label="Title" onChange={handleChange} />
            <MovieList type="add" updateMovies={updateMovies} movies={searchedMovies} />
        </section>
    );
}

export default AddMovie;