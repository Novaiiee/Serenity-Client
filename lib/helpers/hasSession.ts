import { NextApiRequest } from "next";

export function hasSession(req: NextApiRequest, fail: string, success?: string) {
	const session = req.cookies["uid"];

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
