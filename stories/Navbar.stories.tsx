import { Story, Meta } from "@storybook/react";
import { Navbar, NavbarProps } from "../components/ui/Navbar";

const Template: Story<NavbarProps> = (props) => <Navbar {...props} />;

export const Default= Template.bind({});

const component = {
  title: "Navbar",
  component: Navbar
} as Meta<NavbarProps>; 

export default component;
