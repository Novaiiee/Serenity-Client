import { Meta, Story } from "@storybook/react";
import { Button, ButtonProps } from "../components/ui/Button";

const Template: Story<ButtonProps> = (props) => <Button {...props}>{props.children}</Button>;

export const BlackButton = Template.bind({});
BlackButton.args = {
	color: "black",
	children: "Button",
};

const component = {
	title: "Button",
	component: Button,
} as Meta;

export default component;
