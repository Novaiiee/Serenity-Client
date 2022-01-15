import { Navbar } from "@components/ui/Navbar";
import { fetchUserWithCookie } from "@lib/helpers/fetchUserWithCookie";
import Head from "next/head";

export async function getServerSideProps(ctx: any) {
	const user = await fetchUserWithCookie(ctx.req);

	if (user && user.completed) {
		return {
			redirect: {
				destination: "/home",
			},
		};
	} else if (user && !user.completed) {
		return {
			redirect: {
				destination: "/user/complete",
			},
		};
	}

	return {
		props: {},
	};
}

export default function Landing() {
	return (
		<>
			<Head>
				<title>Serenity</title>
			</Head>
			<div>
				<Navbar />
			</div>
		</>
	);
}
