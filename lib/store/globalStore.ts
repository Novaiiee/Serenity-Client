import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { api } from "./api/api";
import { postSlice } from "./slices/postSlice";

export const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer,
		[postSlice.name]: postSlice.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
