import { FC } from "react";
import { MoonLoader } from "react-spinners";

export const LoadingScreen: FC = () => {
	return (
		<div className="h-screen w-screen flex items-center justify-center flex-col space-y-10">
			<div className="flex">
				<MoonLoader speedMultiplier={0.5} size={150} color="#6d28d9" />
			</div>
			<h1 className="text-4xl font-semibold text-violet-700">Loading...</h1>
		</div>
	);
};
