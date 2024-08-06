import { IResponse, ISearchParams, TMovieDetail } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = `${import.meta.env.VITE_OMDB_BASE_URL}`;

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: (builder) => ({
    getMovies: builder.query<IResponse, ISearchParams>({
      query: (search) => ({
        url: "",
        params: {
          apiKey: import.meta.env.VITE_OMDB_API_KEY,
          i: search.i,
          s: search.s,
          type: search.type,
          y: search.y,
          page: search.page,
          plot: search.plot,
        },
      }),
    }),
    getMovieById: builder.query<TMovieDetail, ISearchParams>({
      query: (search) => ({
        url: "",
        params: {
          apiKey: import.meta.env.VITE_OMDB_API_KEY,
          i: search.i,
          plot: search.plot,
        },
      }),
    }),
  }),
});

export const { useGetMoviesQuery, useGetMovieByIdQuery } = baseApi;
