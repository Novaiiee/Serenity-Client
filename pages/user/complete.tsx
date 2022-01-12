import { useCompleteRegistrationMutation } from "@lib/store/api/userApi";
import Head from "next/head";

export default function CompleteRegistration() {
	const [mutate] = useCompleteRegistrationMutation();

	return (
		<>
			<Head>
				<title>User Profile | Serenity</title>
			</Head>
			<div>
				<button
					onClick={() =>
						mutate({
							username: "Twito",
							bio: "Hello i am a real nice and fun guy",
							followedTags: ["Eating Disorder", "Depression", "Anxiety"],
							pronouns: "He/Him",
							socials: {
								discord: "https://discordapp.com/users/847162855660453968",
								instagram: "https://www.instagram.com/novaiiee/",
							},
						})
					}
				>
					submit
				</button>
			</div>
		</>
	);
}
