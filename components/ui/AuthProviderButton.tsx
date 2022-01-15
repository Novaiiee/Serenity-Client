/* eslint-disable @next/next/no-img-element */
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { FC } from "react";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export interface AuthProviderButtonProps {
	type: "login" | "register";
	className?: string;
	provider: string;
	link: string;
}

export const AuthProviderButton: FC<AuthProviderButtonProps> = ({ type, provider, className, link }) => {
	const router = useRouter();

	const text = type === "login" ? "Login with " : "Register with ";
	const icons = new Map();

	icons.set("Discord", <FaDiscord size={50} />);
	icons.set("Github", <FaGithub size={50} />);
	icons.set("Google", <FcGoogle size={50} />);

	const redirect = () => {
		router.push(link);
	};

	return (
		<button
			className={`p-2 px-4 flex items-center space-x-4 border-2 ${className} rounded-lg transition ease-in duration-100 hover:border-blue-400 hover:border-2`}
			onClick={redirect}
		>
			{icons.get(provider)}
			<h1 className="font-semibold text-xl font-poppins">
				{text}
				{provider}
			</h1>
		</button>
	);
};
