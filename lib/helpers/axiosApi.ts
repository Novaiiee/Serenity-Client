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
import axios from "axios";
import Cookies from "js-cookie";
import { chooseEndpoint } from "./chooseEndpoint";

export const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
	withCredentials: true,
	headers: {
		"Content-type": "application/json",
		Cookie: Cookies.get("uid") ?? "",
	},
});

//Post Endpoints

export const fetchPosts = async (options: PostPaginateQuery): Promise<PostPaginate> =>
	(await api.get(chooseEndpoint(options))).data;

export const fetchUserPosts = async (id: string) => (await api.get(`/posts/user/${id}`)).data;
export const fetchMyPosts = async (): Promise<Post[]> => (await api.get(`/posts/my`)).data;

export const fetchCreatePost = async (data: CreatePostDTO): Promise<Post> =>
	(await api.post(`/posts/create`, data)).data;

//User Endpoints

export const fetchUser = async (): Promise<User> => (await api.get("/user/user-data")).data;

export const fetchUserProfile = async (username: string): Promise<User> =>
	(await api.get(`/user/user-profile?username=${username}`)).data;

export const fetchCompleteRegistration = async (user: UserProfileDTO): Promise<User> =>
	(await api.put(`/user/complete`, user)).data;

export const fetchUpdateUser = async (data: UserProfileDTO): Promise<User> =>
	(await api.post(`/user/update`, data)).data;

//Friend Endpoints

export const fetchFriendsBasic = async (): Promise<BasicFriend[]> => (await api.get(`/friend/all`)).data;

export const fetchAddFriend = async (id: string): Promise<User> => (await api.put(`/friend/add/${id}`)).data;

export const fetchIsYourFriend = async (data: BasicUser): Promise<boolean> =>
	(await api.put(`/friend/is-your-friend?userID=${data.userID}&username=${data.username}`)).data;
