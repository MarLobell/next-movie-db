"use client";
import { useState, useEffect } from "react";
import { Movie } from "./types";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AddMovie from "./components/AddMovie/AddMovie";
import SavedMovies from "./components/SavedMovies/SavedMovies";
import styles from "./page.module.scss";

const Home = () => {
    const [savedMovies, setSavedMovies] = useState<Movie[]>([]);

    useEffect(() => {
      const savedMovies = JSON.parse(localStorage.getItem("SAVED_MOVIES") || "[]");
      setSavedMovies(savedMovies);
    }, []);

    const addMovie = (movie: Movie, index: number) => {
      const newSavedMovies = [...savedMovies, movie];
      localStorage.setItem("SAVED_MOVIES", JSON.stringify(newSavedMovies));
      setSavedMovies(newSavedMovies);
    };

    const deleteMovie = (deletedMovie: Movie, index: number) => {
      const updatedMovies = savedMovies.filter((movie, i) => i !== index);
      setSavedMovies(updatedMovies);
      localStorage.setItem("SAVED_MOVIES", JSON.stringify(updatedMovies));
    };

    return (
      <div className={styles.wrapper}>
        <Header />
        <main className={styles.main}>
          <AddMovie updateMovies={addMovie} />
          <SavedMovies updateMovies={deleteMovie} movies={savedMovies} />
        </main>
        <Footer />
      </div>
    );
  };

  export default Home;