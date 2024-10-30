import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { Movie } from "../types/Movie";
import "./MovieGrid.css"

const MoviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;


const Home = () => {

    const[topMovies, setTopMovies] = useState<Movie[]>([])

    const getTopRateMovies = async (url: string) =>{
        const res = await fetch(url)
        const data = await res.json();
        setTopMovies(data.results);
    }

    useEffect(()=>{

        const topRateUrl = `${MoviesUrl}top_rated?${apiKey}`
        getTopRateMovies(topRateUrl);

    },[])
    
    return (
     <div className="container">
        <h2 className="title">Melhores filmes:</h2>
        <div className="movies-container">
            {topMovies.length === 0 && 'carregando'}
            {topMovies.length > 0 && topMovies.map((movie)=> <MovieCard movie={movie} key={movie.id} showLink={true} />)}
        </div>
     </div>
    )
  }
  
  export default Home;