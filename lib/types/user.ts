export interface User {
	username: string;
	email: string;
	userID: string;
	provider: string;
	bio: string;
	pronouns: string;
	avatar: string;
	friends: string[];
	followedTags: string[];
	socials: Socials;
	completed: boolean;
}

interface Socials {
	discord: string;
	instagram: string;
}

export interface UserProfileDTO {
	username: string;
	bio: string;
	pronouns: string;
	followedTags: string[];
	socials: Socials;
}

export interface BasicUser extends Pick<User, "userID" | "username"> {}