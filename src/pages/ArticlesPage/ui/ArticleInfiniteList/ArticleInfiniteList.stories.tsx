import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { ArticleInfiniteList } from './ArticleInfiniteList';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'

export default {
  title: 'pages/ArticleInfiniteList',
  component: ArticleInfiniteList,
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ArticleInfiniteList>;

const Template: ComponentStory<typeof ArticleInfiniteList> = (args) => <ArticleInfiniteList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Pink = Template.bind({});
Pink.args = {};
Pink.decorators = [ThemeDecorator(Theme.PINK)];
