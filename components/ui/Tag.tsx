import { useUserQuery } from "@lib/hooks/userHooks";
import { FC } from "react";

export interface TagProps {
	color: string;
	text: string;
	userID: string;
}

export const Tag: FC<TagProps> = ({ color, text, userID }) => {
	const { data: user } = useUserQuery();

	return (
		<div className={`bg-${color} text-white py-2 px-4 flex space-x-4 rounded-md min-w-max m-0`}>
			<span>{text}</span>
			{userID === user?.userID && <button>X</button>}
		</div>
	);
};
