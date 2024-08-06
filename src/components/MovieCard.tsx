import { TMovie } from "@/types";
import { useNavigate } from "react-router-dom";
import notFound from "@/assets/notfound.jpg";

type Props = {
  data: TMovie;
  size?: "normal" | "mini";
};

const MovieCard = ({ data, size }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${data.imdbID}`);
  };

  const sizing = size === "mini" ? "w-30 h-48" : "w-50 h-80";

  return (
    <img
      src={data.Poster === "N/A" ? notFound : data.Poster}
      alt={data.Title}
      className={`${sizing} object-cover rounded-md cursor-pointer`}
      onClick={handleClick}
    />
  );
};

export default MovieCard;
