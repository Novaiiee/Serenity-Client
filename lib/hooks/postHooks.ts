import { fetchCreatePost, fetchMyPosts, fetchPosts, fetchUserPosts } from "@lib/helpers/api";
import { Post, PostPaginate, PostPaginateQuery } from "@lib/types";
import { useMutation, useQuery } from "react-query";

export function usePostsQuery(options: PostPaginateQuery, initialData?: PostPaginate) {
	return useQuery(["posts", options], { queryFn: () => fetchPosts(options), initialData });
}

export function useUserPostsQuery(id: string, initialData?: PostPaginate) {
	return useQuery(["user-posts", id], { queryFn: () => fetchUserPosts(id), initialData });
}

export function useMyPostsQuery(initialData?: Post[]) {
	return useQuery("my-posts", { queryFn: () => fetchMyPosts(), initialData });
}

export function useCreatePostMutation() {
	return useMutation(fetchCreatePost);
}
