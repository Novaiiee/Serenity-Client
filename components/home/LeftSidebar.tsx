import { ArchiveIcon, HomeIcon, UserGroupIcon } from "@heroicons/react/solid";
import { useGetUserQuery } from "@lib/store/api/userApi";
import { useAppDispatch } from "@lib/store/globalStore";
import { resetTagAndQuery, setPage, setTag } from "@lib/store/slices/postSlice";
import Link from "next/link";
import { FC } from "react";
import { Logo } from "../ui/Logo";

export const LeftSidebar: FC = () => {
	const { data: user } = useGetUserQuery();
	const dispatch = useAppDispatch();

	return (
		<div className="col-span-2 h-screen p-14 overflow-hidden">
			<div className="flex flex-col divide-y-2 space-y-8">
				<Logo />
				<div className="space-y-4 pt-6">
					<div className="flex space-x-4 items-center">
						<HomeIcon height={30} />
						<Link href="/home">
							<a onClick={() => dispatch(resetTagAndQuery())} className="font-semibold">
								Home
							</a>
						</Link>
					</div>
					<div className="flex space-x-4 items-center">
						<UserGroupIcon height={30} />
						<Link href="/home/friends">
							<a className="font-semibold">Friends</a>
						</Link>
					</div>
					<div className="flex space-x-4 items-center">
						<ArchiveIcon height={30} />
						<Link href="/resources">
							<a className="font-semibold">Resources</a>
						</Link>
					</div>
				</div>
				<div className="flex flex-col pt-6">
					<h1 className="font-bold text-xl pb-5">Followed Tags</h1>
					<div className="flex flex-col space-y-3 items-start">
						{user?.followedTags.map((tag, i) => {
							if (i > 10) return null;

							return (
								<button
									onClick={() => {
										dispatch(setPage(1));
										dispatch(setTag(tag));
									}}
									key={tag}
								>
									{tag}
								</button>
							);
						})}
					</div>
					<button className="font-medium text-purple-500 text-left pt-5">
						View all ({user?.followedTags.length})
					</button>
				</div>
			</div>
		</div>
	);
};
