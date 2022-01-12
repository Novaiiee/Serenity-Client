import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const api = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_SERVER_URL, credentials: "include" }),
	endpoints: () => ({}),
});
