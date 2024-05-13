const getMovieData = async (titleSearch: string) => {
    const url = `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_KEY}&s=${titleSearch}`
    const response = await fetch(url)
    .then(
        res => res.json()
    ).catch(
        err => console.error(err)
    );

    return response.Search;
}

export default getMovieData;