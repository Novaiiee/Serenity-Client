import { NextApiRequest } from "next";

export function hasSession(req: NextApiRequest, fail: string, success?: string) {
	const session = req.cookies["uid"];
	const authType = req.cookies["authType"];

	if (authType === "register") {
		return {
			redirect: "/user/complete",
		};
	}

	if (session) {
		return success
			? {
					redirect: {
						destination: success,
					},
			  }
			: {
					props: {},
			  };
	} else {
		return {
			redirect: {
				destination: fail,
			},
		};
	}
}
