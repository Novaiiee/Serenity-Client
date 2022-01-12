import { hasSession } from "@lib/helpers/hasSession";
import Cookies from "js-cookie";

export function getServerSideProps({ req }: any) {
	const authType = Cookies.get("authType");
	return hasSession(req, `/auth/${authType}?error=true`, "/home");
}

export default function Redirect() {
	return <div></div>;
}
