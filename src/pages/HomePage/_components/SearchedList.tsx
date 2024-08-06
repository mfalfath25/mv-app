import Loader from "@/components/Loader";
import MovieCard from "@/components/MovieCard";
import { IResponse } from "@/types";

type Props = {
  data?: IResponse;
  isLoading: boolean;
};

const DefaultList = ({ data, isLoading }: Props) => {
  return (
    <>
      <div className="py-4">
        {isLoading ? (
          <Loader />
        ) : data ? (
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-4">
            {data?.Search?.map((movie) => (
              <li key={movie.imdbID}>
                <div className="flex flex-col gap-1">
                  <MovieCard data={movie} />
                  <p className="text-sm font-semibold text-ellipsis overflow-hidden">
                    {movie.Title}
                  </p>
                  <p className="text-sm">{movie.Year}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Searched title not found</p>
        )}
      </div>
    </>
  );
};

export default DefaultList;
