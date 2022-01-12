import { FC } from "react";
import { AuthProviderButton } from "../ui/AuthProviderButton";

interface AuthOptionsProps {
	error?: boolean;
	type: "login" | "register";
}

export const AuthOptions: FC<AuthOptionsProps> = ({ error, type }) => {
	return (
		<div className="flex flex-col justify-center space-y-10">
			<AuthProviderButton provider="Google" type={type} link="http://localhost:8000/auth/google" />
			<AuthProviderButton
				provider="Github"
				type={type}
				link="http://localhost:8000/auth/github"
				className="bg-black text-white"
			/>
			<AuthProviderButton
				provider="Discord"
				type={type}
				link="http://localhost:8000/auth/discord"
				className="bg-blue-600 text-white"
			/>
		</div>
	);
};
