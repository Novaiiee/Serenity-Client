import { removeSession } from "@lib/helpers/removeSession";
import { NextApiRequest, NextApiResponse } from "next";

export default async function logout(req: NextApiRequest, res: NextApiResponse) {
  removeSession(res);
  
	res.writeHead(302, { Location: "/" });
	res.end();
}
