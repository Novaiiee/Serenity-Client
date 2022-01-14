import { LeftSidebar } from "@components/home/LeftSidebar";
import { MainContent } from "@components/home/MainContent";
import { RightSidebar } from "@components/home/RightSidebar";
import { LoadingScreen } from "@components/ui/LoadingScreen";
import { hasSession } from "@lib/helpers/hasSession";
import { useUserQuery } from "@lib/hooks/userHooks";
import Head from "next/head";

export async function getServerSideProps({ req }: any) {
	return hasSession(req, "/user/complete");
}

export default function Home() {
	const { isLoading: isLoadingUser } = useUserQuery();

	const isLoading =  isLoadingUser;
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
