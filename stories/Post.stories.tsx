import { Meta, Story } from "@storybook/react";
import { Post, PostProps } from "../components/ui/Post";

const props = {
	post: {
		comments: [],
		content:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		createdAt: "2021-12-22",
		avatar: "https://avatarfiles.alphacoders.com/161/thumb-161887.png",
		name: "I ate too much food last night",
		tags: [
			"Eating Disorder",
			"Anxiety",
			"Depression",
			"Personality Disorder",
			"Social Anxiety",
			"Working too much",
		],
		userID: "527aafd7-5cdf-4aae-9cc8-11c99bdd5808",
		username: "Twito",
	},
};

export const Default: Story<PostProps> = () => (
	<div className="flex">
		<div className="h-screen w-40"></div>
		<Post {...props} />
		<div className="h-screen w-40"></div>
	</div>
);

export const PostList = () => (
	<div className="flex flex-col space-y-6">
		<Post post={props.post}/>
		<Post post={props.post}/>
		<Post post={props.post}/>
		<Post post={props.post}/>
	</div>
)

const component = {
	title: "Post",
	component: Post,
} as Meta;

export default component;
