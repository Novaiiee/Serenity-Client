import { useUserQuery } from "@lib/hooks/userHooks";
import Link from "next/link";
import { FC } from "react";
import { Logo } from "./Logo";

export interface NavbarProps {}

export const Navbar: FC<NavbarProps> = ({}) => {
	const { data: user } = useUserQuery();

	return (
		<div className="flex justify-between items-center bg-gray-200 px-10 py-6 h-10vh">
			<div>
				<Logo />
			</div>
			{!user ? (
				<div className="space-x-8">
					<Link href="/auth/login">
						<a className="font-inter">Login</a>
					</Link>
					<Link href="/auth/register">
						<a className="font-inter p-4 bg-purple-500 text-white rounded-md">Register</a>
					</Link>
				</div>
			) : (
				<div>
					<Link href="/api/logout">
						<a>Logout</a>
					</Link>
				</div>
			)}
		</div>
	);
};
