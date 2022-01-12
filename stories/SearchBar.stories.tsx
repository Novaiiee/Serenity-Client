import { Meta, Story } from "@storybook/react";
import { SearchBar, SearchBarProps } from "../components/ui/SearchBar";

const Template: Story<SearchBarProps> = (props) => <SearchBar {...props} />;

export const Default = Template.bind({});

const component = {
	title: "SearchBar",
	component: SearchBar,
} as Meta<SearchBarProps>;

export default component;
