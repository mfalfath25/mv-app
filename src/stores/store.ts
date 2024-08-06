import { configureStore } from "@reduxjs/toolkit";
import { dataSlice } from "./slices/DataSlice";
import { baseApi } from "@/services/movie";

export const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(baseApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
