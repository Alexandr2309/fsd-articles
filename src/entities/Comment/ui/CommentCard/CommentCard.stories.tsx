import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import avatar from '@/shared/assets/tests/test_ava.png';
import { CommentCard } from './CommentCard';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'entities/CommentCard',
  component: CommentCard,
  args: {
    comment: {
      text: 'Отлично',
      id: '2',
      user: {
        username: 'user',
        avatar,
        id: '1',
      },
    },
  },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Pink = Template.bind({});
Pink.args = {};
Pink.decorators = [ThemeDecorator(Theme.PINK)];
