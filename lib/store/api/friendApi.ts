import { BasicFriend, User } from "@lib/types";
import { api } from "./api";

export const friendApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getFriendsBasic: builder.query<BasicFriend[], void>({
			query: () => `/friend/all`,
		}),
		addFriend: builder.mutation<User, string>({
			query: (id) => ({ url: `/friend/add/${id}`, method: "put" }),
		}),
		isYourFriend: builder.query<boolean, { username: string; userID: string }>({
			query: ({ username, userID }) => `/friend/is-your-friend?username=${username}&userID=${userID}`,
		}),
	}),
});

export const { useGetFriendsBasicQuery, useIsYourFriendQuery } = friendApi;
