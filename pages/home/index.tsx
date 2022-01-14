import { LeftSidebar } from "@components/home/LeftSidebar";
import { MainContent } from "@components/home/MainContent";
import { RightSidebar } from "@components/home/RightSidebar";
import { LoadingScreen } from "@components/ui/LoadingScreen";
import { hasSession } from "@lib/helpers/hasSession";
import { useUserQuery } from "@lib/hooks/userHooks";
import Cookies from "js-cookie";
import Head from "next/head";
import { useEffect } from "react";

export async function getServerSideProps({ req }: any) {
	return hasSession(req, "/landing");
}

export default function Home() {
	const { isLoading: isLoadingUser } = useUserQuery();

	useEffect(() => {
		Cookies.set("authType", "none");
	}, []);

	const isLoading = isLoadingUser;
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
