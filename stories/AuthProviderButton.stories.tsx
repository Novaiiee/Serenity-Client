import { Meta, Story } from "@storybook/react";
import { AuthProviderButton, AuthProviderButtonProps } from "../components/ui/AuthProviderButton";

const Template: Story<AuthProviderButtonProps> = (props) => <AuthProviderButton {...props} />;

export const Google = Template.bind({});
Google.args = {
	provider: "Google",
	type: "login",
	className: "border-gray-700",
};

export const Github = Template.bind({});
Github.args = {
	provider: "Github",
	type: "login",
	className: "bg-black text-white border-black",
};

export const Twitter = Template.bind({});
Twitter.args = {
	provider: "Twitter",
	type: "login",
	className: "bg-blue-500 text-white border-blue-500",
};

const component = {
	title: "AuthProviderButton",
	component: AuthProviderButton,
} as Meta<AuthProviderButtonProps>;

export default component;
