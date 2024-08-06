import { TMovieDetail } from "@/types";

type Props = {
  data?: TMovieDetail;
};

const Details = ({ data }: Props) => {
  return (
    <>
      <div className="flex flex-col gap-1 px-4 sm:px-24 md:px-40">
        <h1 className="text-xl font-bold text-red-500 py-4">Movie Info</h1>
        <span className="block w-full h-[1px] bg-neutral-700 mb-4"></span>
        {data && (
          <>
            <div className="movieDetailsGrid overflow-hidden bg-neutral-800 text-white rounded-lg p-4">
              <p className="text-sm font-semibold">Title</p>
              <p className="text-sm text-neutral-300">{data.Title}</p>

              <p className="text-sm font-semibold">Genre</p>
              <p className="text-sm text-neutral-300">{data.Genre}</p>

              <p className="text-sm font-semibold">Runtime</p>
              <p className="text-sm text-neutral-300">{data.Runtime}</p>

              <p className="text-sm font-semibold">Director</p>
              <p className="text-sm text-neutral-300">{data.Director}</p>

              <p className="text-sm font-semibold">Writer</p>
              <p className="text-sm text-neutral-300">{data.Writer}</p>

              <p className="text-sm font-semibold">Year</p>
              <p className="text-sm text-neutral-300">{data.Year}</p>

              <p className="text-sm font-semibold">Released</p>
              <p className="text-sm text-neutral-300">{data.Released}</p>

              <p className="text-sm font-semibold">Country</p>
              <p className="text-sm text-neutral-300">{data.Country}</p>

              <p className="text-sm font-semibold">Language</p>
              <p className="text-sm text-neutral-300">{data.Language}</p>

              <p className="text-sm font-semibold">Actors</p>
              <p className="text-sm text-neutral-300">{data.Actors}</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Details;
