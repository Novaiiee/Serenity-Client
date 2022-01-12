import { chooseEndpoint } from "@lib/helpers/chooseEndpoint";
import { CreatePostDTO, Post, PostPaginate, PostPaginateQuery, User } from "@lib/types";
import { api } from "./api";

export const postApi = api.injectEndpoints({
	endpoints: (builder) => ({
		userPosts: builder.query<Post[], string>({
			query: (id) => `/user/${id}`,
		}),
		myPosts: builder.query<Post[], null>({
			query: () => `posts/my`,
		}),
		createPost: builder.mutation<User, CreatePostDTO>({
			query: (data) => ({ url: "/create", body: data, method: "POST" }),
		}),
		getPosts: builder.query<PostPaginate, PostPaginateQuery>({
			query: (options) => chooseEndpoint(options),
		}),
	}),
});

export const {
	useUserPostsQuery,
	useMyPostsQuery,
	useGetPostsQuery
} = postApi;
