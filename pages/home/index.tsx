import { LeftSidebar } from "@components/home/LeftSidebar";
import { MainContent } from "@components/home/MainContent";
import { RightSidebar } from "@components/home/RightSidebar";
import { LoadingScreen } from "@components/ui/LoadingScreen";
import { fetchUserWithCookie } from "@lib/helpers/fetchUserWithCookie";
import { useUserQuery } from "@lib/hooks/userHooks";
import { InferGetServerSidePropsType } from "next";
import Head from "next/head";

export async function getServerSideProps(ctx: any) {
	const user = await fetchUserWithCookie(ctx.req);

	if (!user) {
		return {
			redirect: {
				destination: "/landing",
				permanent: false,
			},
		};
	} else if (user && !user.completed) {
		return {
			redirect: {
				destination: "/user/complete",
				permanent: false,
			},
		};
	}

	return {
		props: {
			user,
		},
	};
}

export default function Home({ user }: InferGetServerSidePropsType<typeof getServerSideProps>) {
	const { isLoading } = useUserQuery(user);

	if (isLoading) return <LoadingScreen />;

	return (
		<>
			<Head>
				<title>Home | Serenity</title>
			</Head>
			<div className="grid grid-cols-12">
				<LeftSidebar />
				<MainContent />
				<RightSidebar />
			</div>
		</>
	);
}
