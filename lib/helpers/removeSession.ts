import { serialize } from "cookie";
import { NextApiResponse } from "next";

export function removeSession(res: NextApiResponse) {
	const cookie = serialize("uid", "", {
		maxAge: -1,
		path: "/",
	});

	res.setHeader("Set-Cookie", cookie);
}
