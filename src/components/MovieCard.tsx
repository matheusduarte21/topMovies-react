import { FaStar } from "react-icons/fa";
import { Movie } from "../types/Movie";
import { Link } from "react-router-dom";

const imageURL = import.meta.env.VITE_IMG;

type Props = {
    movie: Movie;
    showLink: boolean;
}

const MovieCard = ({movie, showLink}: Props) =>{
    return(
        <div className="movie-card">
            <img src={imageURL + movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>
                <FaStar/> {movie.vote_average.toFixed(1)}
            </p>
            {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
        </div>
    )
}

export default MovieCard;