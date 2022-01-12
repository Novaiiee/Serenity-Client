import { User, UserProfileDTO } from "@lib/types";
import { api } from "./api";

export const userApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getUser: builder.query<User, void>({
			query: () => `/user/user-data`,
		}),
		getUserProfile: builder.query<User, string>({
			query: (username) => `/user/user-profile?username=${username}`,
		}),
		completeRegistration: builder.mutation<User, UserProfileDTO>({
			query: (user) => ({ url: "/user/complete", body: user, method: "PUT" }),
		}),
		updateUser: builder.mutation<User, UserProfileDTO>({
			query: (user) => ({ url: "/user/update", body: user, method: "PUT" }),
		}),
	}),
});

export const {
	useGetUserQuery,
	useCompleteRegistrationMutation,
	useUpdateUserMutation,
	useGetUserProfileQuery,
} = userApi;
