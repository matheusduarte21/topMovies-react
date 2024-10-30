
import { useSearchParams } from "react-router-dom";
import "./MovieGrid.css"
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { Movie } from "../types/Movie";
const seachUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

function Search() {

    const [searchParams] = useSearchParams();
    const [movies, setMovies] = useState<Movie[]>([]);
    const query = searchParams.get("q")

    const getSearchMovies = async (url: string) =>{
        const res = await fetch(url)
        const data = await res.json();
        setMovies(data.results);
    }

    useEffect(()=>{

        const searchWithQueryUrl = `${seachUrl}?${apiKey}&query=${query}`
        getSearchMovies(searchWithQueryUrl);

    },[query])

    return (
        <div className="container">
        <h2 className="title">Resultados para: <span className="query-text">{query}</span></h2>
        <div className="movies-container">
            {movies.length === 0 && 'carregando'}
            {movies.length > 0 && movies.map((movie)=> <MovieCard movie={movie} key={movie.id} showLink={true} />)}
        </div>
     </div>
    )
  }
  
  export default Search;