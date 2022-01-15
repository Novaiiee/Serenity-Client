import {
	BasicFriend,
	BasicUser,
	CreatePostDTO,
	Post,
	PostPaginate,
	PostPaginateQuery,
	User,
	UserProfileDTO,
} from "@lib/types";
import { chooseEndpoint } from "./chooseEndpoint";

export class APIService {
	get = async (url: string) => {
		const res = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + url, {
			method: "GET",
			credentials: "include",
		});

		if (res.ok) return await res.json();
	};
	post = async <T>(url: string, body?: T) => {
		const res = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + url, {
			method: "POST",
			body: JSON.stringify(body),
			credentials: "include",
		});

		if (res.ok) return await res.json();
	};

	put = async <T>(url: string, body?: T) => {
		const res = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + url, {
			method: "PUT",
			credentials: "include",
			body: JSON.stringify(body),
		});

		if (res.ok) return await res.json();
	};
}

export let api = new APIService();

//Post Endpoints

export const fetchPosts = async (options: PostPaginateQuery): Promise<PostPaginate> =>
	await api.get(chooseEndpoint(options));

export const fetchUserPosts = async (id: string) => await api.get(`/posts/user/${id}`);
export const fetchMyPosts = async (): Promise<Post[]> => await api.get(`/posts/my`);

export const fetchCreatePost = async (data: CreatePostDTO): Promise<Post> =>
	await api.post(`/posts/create`, data);

//User Endpoints

export const fetchUser = async (): Promise<User> => {
	const user = await api.get("/user/user-data");
	return user;
};

export const fetchUserProfile = async (username: string): Promise<User> =>
	await api.get(`/user/user-profile?username=${username}`);

export const fetchCompleteRegistration = async (user: UserProfileDTO): Promise<User> =>
	await api.put(`/user/complete`, user);

export const fetchUpdateUser = async (data: UserProfileDTO): Promise<User> =>
	await api.post(`/user/update`, data);

//Friend Endpoints

export const fetchFriendsBasic = async (): Promise<BasicFriend[]> => await api.get(`/friend/all`);

export const fetchAddFriend = async (id: string): Promise<User> => await api.put(`/friend/add/${id}`);

export const fetchIsYourFriend = async (data: BasicUser): Promise<boolean> =>
	await api.put(`/friend/is-your-friend?userID=${data.userID}&username=${data.username}`);
