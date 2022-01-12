import Head from "next/head";
import Link from "next/link";

export function getServerSideProps({ req }: any) {
	const session = req.cookies["uid"];

	if (session) {
		return {
			redirect: { permanent: false, destination: "/home" },
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
				<h1>Landing</h1>
				<Link href="/auth/register">Register</Link>
				<Link href="/auth/login">Login</Link>
			</div>
		</>
	);
}
