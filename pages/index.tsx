import Head from "next/head";
import { hasSession } from "@lib/helpers/hasSession";

export async function getServerSideProps({ req }: any) {
	return hasSession(req, "/landing", "/home");
}

export default function Start() {
	return (
		<Head>
			<title>Serenity</title>
		</Head>
	);
}
