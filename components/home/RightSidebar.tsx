/* eslint-disable @next/next/no-img-element */
import { useGetFriendsBasicQuery } from "@lib/store/api/friendApi";
import { useGetUserQuery } from "@lib/store/api/userApi";
import Link from "next/link";
import { FC } from "react";
import { Dropdown } from "../ui/Dropdown";

export const RightSidebar: FC = () => {
	const { data: user } = useGetUserQuery();
	const { data: friends } = useGetFriendsBasicQuery();

	return (
		<div className="col-span-2 h-screen p-14 overflow-hidden">
			<div className="flex flex-col space-y-8">
				<div className="flex items-center justify-between">
					<div className="flex space-x-4 items-center">
						<img src={user?.avatar} alt={`${user?.username}'s avatar`} className="w-10 rounded-md" />
						<h1>{user?.username}</h1>
					</div>
					<Dropdown />
				</div>
				<div>
					<h1 className="font-bold text-xl pb-5">Online Friends</h1>
					<div>
						{friends?.map((friend) => (
							<Link key={friend.userID} href={`/users/${friend.username}`} passHref>
								<div className="flex items-center space-x-4 cursor-pointer">
									<img
										src={friend?.avatar}
										alt={`${friend?.username}'s avatar`}
										className="w-10 rounded-md cursor-pointer"
									/>
									<h2 className="cursor-pointer">{friend.username}</h2>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
