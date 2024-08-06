import { TMovieDetail } from "@/types";
import { Rating } from "@mantine/core";

type Props = {
  data?: TMovieDetail;
};

const Banner = ({ data }: Props) => {
  return (
    <div className="relative border-t-[1px] border-b-[1px] border-black flex flex-col min-h-72 overflow-hidden">
      <div className="absolute inset-0 z-10 flex flex-col gap-1 px-4 py-2 sm:px-24 md:px-40 sm:py-4">
        <h1 className="text-2xl font-bold text-white py-2">
          {data?.Title} ({data?.Year})
        </h1>
        <Rating defaultValue={Number(data?.imdbRating ?? 0)} />
        <p className="text-white">({data?.imdbVotes ?? 0} Votes)</p>
        <p className="text-white line-clamp-2 sm:line-clamp-3 my-2 sm:my-4">{data?.Plot ?? "-"}</p>
        <div className="flex flex-row flex-wrap gap-1 mt-4 sm:mt-0">
          {data?.Actors ? (
            data.Actors.split(", ").map((actor, index) => (
              <p
                key={index}
                className="text-white bg-neutral-800 text-md border-[1px] rounded-xl px-2 border-white inline-block mr-2 mb-2">
                {actor}
              </p>
            ))
          ) : (
            <p className="text-white border-[1px] rounded-xl px-2 border-white">-</p>
          )}
        </div>
      </div>
      <div className="absolute inset-0">
        <img
          src={data?.Poster === "N/A" ? "src/assets/banner-1.jpg" : data?.Poster}
          alt="Movie Banner"
          className="h-full w-full object-cover filter blur-sm"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
    </div>
  );
};

export default Banner;
