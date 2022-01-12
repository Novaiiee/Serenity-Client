module.exports = {
	reactStrictMode: true,
	env: {
		GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
		GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
		GITHUB_ID: process.env.GITHUB_ID,
		GITHUB_SECRET: process.env.GITHUB_SECRET,
		DATABASE: process.env.DATABASE,
		NEXTAUTH_URL: process.env.NEXTAUTH_URL,
	},
	images: {
		domains: ["images.unsplash.com"],
	},
};
