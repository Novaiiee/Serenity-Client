import { fetchUserWithCookie } from "@lib/helpers/fetchUserWithCookie";
import Head from "next/head";

export async function getServerSideProps(ctx: any) {
	const user = await fetchUserWithCookie(ctx.req);

	if (user && !user.completed) {
		return {
			redirect: {
				destination: "/user/complete",
				permanent: false,
			},
		};
	}

	if (user && user.completed) {
		return {
			redirect: {
				destination: "/home",
				permanent: false,
			},
		};
	}

	return { redirect: { destination: "/landing", permanent: false } };
}

export default function Start() {
	return (
		<Head>
			<title>Serenity</title>
		</Head>
	);
}
