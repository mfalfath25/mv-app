import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/stores/store";
import { setCustomPage } from "@/stores/slices/DataSlice";
import { Pagination } from "@mantine/core";
import { useGetMoviesQuery } from "@/services/movie";
import MovieCard from "@/components/MovieCard";
import Loader from "@/components/Loader";

const DefaultList = () => {
  const dispatch = useDispatch();
  const page = useSelector((state: RootState) => state.data.page);

  const { data, isLoading } = useGetMoviesQuery({
    s: "speed",
    type: "movie",
    page: page.toString(),
  });

  const totalPages = Math.ceil(Number(data?.totalResults ?? 0) / 10);

  return (
    <>
      <div className="flex flex-col">
        <span className="block w-full h-[1px] bg-neutral-700 mt-4"></span>
        <h1 className="text-xl font-bold text-red-500 py-4">Movies</h1>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {data && (
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-4">
                {data.Search?.map((movie) => (
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
            )}
            <Pagination
              className="mx-auto my-4"
              value={page}
              onChange={(newPage) => dispatch(setCustomPage(newPage))}
              total={totalPages}
              siblings={1}
            />
          </>
        )}
      </div>
    </>
  );
};

export default DefaultList;
