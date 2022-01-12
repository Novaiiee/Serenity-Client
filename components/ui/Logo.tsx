import { FC } from "react";
import { Feather } from "react-feather";

export interface LogoProps {}

export const Logo: FC<LogoProps> = ({}) => {
	return (
		<div className="flex items-center space-x-5">
			<div className="h-10 w-10 bg-purple-600 rounded-md flex items-center justify-center">
				<Feather color="white" />
			</div>
			<h1 className="text-black dark:text-white font-bold text-2xl">Serenity</h1>
		</div>
	);
};
