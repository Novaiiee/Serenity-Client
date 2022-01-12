import { FC } from "react";
import { Tag } from "./Tag";

interface TagListProps {
	tags: string[];
	userID: string;
}

export const TagList: FC<TagListProps> = ({ tags, userID }) => {
	return (
		<div className="flex items-center space-x-4 tags">
			{tags.map((tag, i) => (
				<Tag text={tag} color="red-500" userID={userID} key={i} />
			))}
		</div>
	);
};
