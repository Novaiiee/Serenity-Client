import { FC } from "react";
import { AuthProviderButton } from "../ui/AuthProviderButton";

interface AuthOptionsProps {
	error?: boolean;
	type: "login" | "register";
}

export const AuthOptions: FC<AuthOptionsProps> = ({ error, type }) => {
	return (
		<div className="flex flex-col justify-center space-y-10">
			<AuthProviderButton
				provider="Google"
				type={type}
				link={`${process.env.NEXT_PUBLIC_SERVER_URL}auth/google`}
			/>
			<AuthProviderButton
				provider="Github"
				type={type}
				link={`${process.env.NEXT_PUBLIC_SERVER_URL}auth/github`}
				className="bg-black text-white"
			/>
			<AuthProviderButton
				provider="Discord"
				type={type}
				link={`${process.env.NEXT_PUBLIC_SERVER_URL}auth/discord`}
				className="bg-blue-600 text-white"
			/>
		</div>
	);
};
