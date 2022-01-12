import { Meta, Story } from "@storybook/react";
import { Tag, TagProps } from "../components/ui/Tag";

const Template: Story<TagProps> = (props) => <Tag {...props} />;

export const Default = Template.bind({});
Default.args = {
  color: "red-500",
  text: "Depression",
  userID: ''
}

const component = {
	title: "Tag",
	component: Tag,
} as Meta<TagProps>;

export default component;
