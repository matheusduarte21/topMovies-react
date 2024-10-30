import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

import MovieCard from "../components/MovieCard";
import { Movie } from "../types/Movie"; // Importando o tipo Movie
import "./Movie.css";

const moviesURL = import.meta.env.VITE_API as string;
const apiKey = import.meta.env.VITE_API_KEY as string;

const MovieFilme = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null); 

  const getMovie = async (url: string) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovie(data);
    } catch (error) {
      console.error("Erro ao buscar o filme:", error);
    }
  };

  const formatCurrency = (number: number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    if (id) { 
      const movieUrl = `${moviesURL}${id}?${apiKey}`;
      getMovie(movieUrl);
    }
  }, [id]); 

  return (
    <div className="movie-page">
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false} />
          <p className="tagline">{movie.tagline}</p>
          <div className="info">
            <h3>
              <BsWallet2 /> Orçamento:
            </h3>
            <p>{formatCurrency(movie.budget)}</p>
          </div>
          <div className="info">
            <h3>
              <BsGraphUp /> Receita:
            </h3>
            <p>{formatCurrency(movie.revenue)}</p>
          </div>
          <div className="info">
            <h3>
              <BsHourglassSplit /> Duração:
            </h3>
            <p>{movie.runtime} minutos</p>
          </div>
          <div className="info description">
            <h3>
              <BsFillFileEarmarkTextFill /> Descrição:
            </h3>
            <p>{movie.overview}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieFilme;
