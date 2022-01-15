import { Button } from "@components/ui/Button";
import { useCompleteRegistrationMutation } from "@lib/hooks/userHooks";
import { Socials } from "@lib/types";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaDiscord, FaInstagram } from "react-icons/fa";

export default function CompleteRegistration() {
	const router = useRouter();

	const [username, setUsername] = useState("");
	const [bio, setBio] = useState("");
	const [socials, setSocials] = useState<Socials>({ discord: "", instagram: "" });
	const [pronouns, setPronouns] = useState({
		first: "",
		second: "",
	});

	const { mutate } = useCompleteRegistrationMutation(() => {
		router.push("/home");
	});

	return (
		<>
			<Head>
				<title>User Profile | Serenity</title>
			</Head>
			<div>
				<h1>Username</h1>
				<input
					type="text"
					className="input"
					placeholder="Username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<h1>Bio</h1>
				<input
					type="text"
					className="input"
					placeholder="Bio"
					value={bio}
					onChange={(e) => setBio(e.target.value)}
				/>
				<h1>Pronouns</h1>
				<div>
					<input
						type="text"
						className="input"
						value={pronouns.first}
						onChange={(e) => setPronouns({ ...pronouns, first: e.target.value })}
					/>
					<span>/</span>
					<input
						type="text"
						className="input"
						value={pronouns.second}
						onChange={(e) => setPronouns({ ...pronouns, second: e.target.value })}
					/>
				</div>
				<h1>Socials</h1>
				<div>
					<FaDiscord />
					<input
						type="text"
						placeholder="Discord"
						className="input"
						value={socials.discord}
						onChange={(e) => setSocials({ ...socials, discord: e.target.value })}
					/>

					<FaInstagram />
				</div>
				<input
					type="text"
					className="input"
					placeholder="Instagram"
					value={socials.instagram}
					onChange={(e) => setSocials({ ...socials, instagram: e.target.value })}
				/>
				<div>
					<Button
						onClick={() =>
							mutate({
								username,
								bio,
								followedTags: ["Eating Disorder", "Depression", "Anxiety"],
								pronouns: `${pronouns.first}/${pronouns.second}`,
								socials,
							})
						}
					>
						Submit
					</Button>
				</div>
			</div>
		</>
	);
}
