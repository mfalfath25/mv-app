export type TMovie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

export type TRating = {
  Source: string;
  Value: string;
};

export type TMovieDetail = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: TRating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
};

export interface IResponse {
  Search: TMovie[];
  totalResults: string;
  Response: string;
}

export interface ISearchParams {
  i?: string;
  s?: string;
  type?: "movie" | "series" | "episode";
  y?: string;
  page?: string;
  plot?: "short" | "full";
}
