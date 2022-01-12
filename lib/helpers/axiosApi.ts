import axios from "axios";
import Cookies from "js-cookie";

export const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
	withCredentials: true,
	headers: {
		"Content-type": "application/json",
		Cookie: Cookies.get("uid") ?? "",
	},
});
