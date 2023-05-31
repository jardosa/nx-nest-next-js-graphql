import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { MyNewLib } from './ui';

const Story: ComponentMeta<typeof MyNewLib> = {
  component: MyNewLib,
  title: 'MyNewLib',
};
export default Story;

const Template: ComponentStory<typeof MyNewLib> = (args) => (
  <MyNewLib {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
