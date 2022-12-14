import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { Navbar } from './Navbar';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'widgets/Navbar',
  component: Navbar,
  decorators: [StoreDecorator({
    user: { dataAuth: undefined },
  })],
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => (
  <Navbar {...args} />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
Dark.args = {};

export const WithLogin = Template.bind({});
WithLogin.args = {};
WithLogin.decorators = [StoreDecorator({
  user: { dataAuth: {} },
})];
