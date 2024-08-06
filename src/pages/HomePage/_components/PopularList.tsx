import MovieCard from "@/components/MovieCard";
import { useGetMoviesQuery } from "@/services/movie";

const PopularList = () => {
  const { data, isLoading } = useGetMoviesQuery({
    s: "dead",
    y: "2024",
    type: "movie",
    page: "1",
  });

  return (
    <>
      <span className="block w-full h-[1px] bg-neutral-700 mt-4"></span>
      <h1 className="text-xl font-bold text-red-500 py-4">Popular 2024 Movies</h1>
      {isLoading && <p>Loading...</p>}
      {data && (
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-5">
          {data.Search?.map((movie) => (
            <li key={movie.imdbID}>
              <div className="flex flex-col gap-1">
                <MovieCard
                  data={movie}
                  size="mini"
                />
                <p className="text-sm font-semibold text-ellipsis overflow-hidden">{movie.Title}</p>
                <p className="text-sm">{movie.Year}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default PopularList;
