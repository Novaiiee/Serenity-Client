import { AuthOptions } from "@components/auth/AuthForm";
import { Error } from "@components/auth/Error";
import { Navbar } from "@components/ui/Navbar";
import { fetchUserWithCookie } from "@lib/helpers/fetchUserWithCookie";
import Head from "next/head";
import Link from "next/link";

export async function getServerSideProps({ query, req }: any) {
	const error = query.error;
	const user = await fetchUserWithCookie(req);

	if (user && user.completed) {
		return {
			redirect: {
				permanent: false,
				destination: "/home",
			},
		};
	} else if (user && !user.completed) {
		return {
			redirect: {
				permanent: false,
				destination: "/user/complete",
			},
		};
	}

	return {
		props: {
			error: error ?? "",
		},
	};
}

export default function Register({ error }: any) {
	return (
		<>
			<Head>
				<title>Register | Serenity</title>
			</Head>
			<div className="max-h-screen">
				<Navbar />
				<div className="flex flex-col items-center justify-center h-90vh py-20 space-y-20">
					{error && <Error message={error} />}
					<h1 className="font-bold text-6xl">Register</h1>
					<AuthOptions error={error} type="register" />
					<Link href="/auth/login">
						<a className="w-1/2 blue-500 text-center font-semibold text-blue-500 text-xl">
							Already have an account? Login
						</a>
					</Link>
				</div>
			</div>
		</>
	);
}
