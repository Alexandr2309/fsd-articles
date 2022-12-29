import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import '@/app/styles/index.scss';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/themeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import ArticlesPage from './ArticlesPage';

export default {
  title: 'pages/ArticlesPage',
  component: ArticlesPage,
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Pink = Template.bind({});
Pink.args = {};
Pink.decorators = [ThemeDecorator(Theme.PINK)];
