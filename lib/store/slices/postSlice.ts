import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
	query: string;
	tag: string;
	page: number;
}

const initialState: State = {
	query: "",
	tag: "",
	page: 0
};

export const postSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		setQuery: (state, action: PayloadAction<string>) => {
			state.query = action.payload;
			state.tag = "";
		},
		setTag: (state, action: PayloadAction<string>) => {
			state.tag = action.payload;
			state.query = "";
		},
		setPage: (state, action: PayloadAction<number>) => {
			state.page = action.payload
		},
		resetTagAndQuery: (state) => {
			state.tag = "";
			state.query = "";
		},
	},
});

export const { setQuery, setTag, resetTagAndQuery , setPage} = postSlice.actions;
