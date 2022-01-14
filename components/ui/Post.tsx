/* eslint-disable @next/next/no-img-element */
import { AnnotationIcon, DotsHorizontalIcon } from "@heroicons/react/solid";
import { useUserQuery } from "@lib/hooks/userHooks";
import { Post as PostType } from "@lib/types";
import Link from "next/link";
import { FC } from "react";
import { maxCharacterLength } from "../../lib/helpers/maxCharacterLength";

export interface PostProps {
	className?: string;
	post: PostType;
}

export const Post: FC<PostProps> = ({ className, post }) => {
	const { data: user } = useUserQuery();

	const { comments, content, createdAt, name, avatar, tags, userID, username } = post;

	return (
		<div className="rounded-lg bg-white shadow-lg p-5 flex flex-col justify-between w-full max-h-80 space-y-4">
			{/* User Data */}
			<div className="flex items-center justify-between pb-4">
				<Link href={`/user/${username}`} passHref>
					<div className="flex items-center space-x-4">
						<img src={avatar} alt={`${username}'s image`} className="h-12 w-12 object-fill rounded-lg" />
						<h1 className="font-bold text-xl">{username}</h1>
					</div>
				</Link>
				{userID !== user?.userID && (
					<button className="outline-none cursor-pointer">
						<DotsHorizontalIcon height={20} width={20} color="black" />
					</button>
				)}
			</div>
			{/* Content */}
			<div className="space-y-2">
				<h2 className="font-bold text-2xl">{name}</h2>
				<p className="text-lg">{maxCharacterLength(content, 30) + "..."}</p>
			</div>
			{/* Bottom Section */}
			<div className="grid grid-cols-8 pt-4">
				<div className="flex items-center space-x-2 col-span-2 comments-button">
					<AnnotationIcon color="black" height={20} width={20} />
					<span className="comments-button">View All ({comments.length})</span>
				</div>
				{/* <div className="col-span-6">
					<TagList tags={tags} userID={userID} />
				</div> */}
			</div>
		</div>
	);
};
