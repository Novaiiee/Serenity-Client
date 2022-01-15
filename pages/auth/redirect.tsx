import { fetchUserWithCookie } from "@lib/helpers/fetchUserWithCookie";

export async function getServerSideProps(ctx: any) {
	const user = await fetchUserWithCookie(ctx.req);

	if (user && !user.completed) {
		return {
			redirect: {
				destination: "/user/complete",
			},
		};
	}
	if (!user) {
		return {
			redirect: {
				destination: "/landing",
			},
		};
	}

	return { redirect: { destination: "/home" } };
}

export default function Redirect() {
	return <div></div>;
}
