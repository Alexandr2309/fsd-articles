import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../../../Button/Button';
import { Dropdown } from './Dropdown';

export default {
  title: 'shared/Dropdown',
  component: Dropdown,
  args: {
    items: [
      {
        content: 'Профиль',
        href: 'sss',
      },
      {
        content: 'Выйти',
        onClick: () => 0,
      },
    ],
    trigger: <Button>Открыть</Button>,
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const bottomLeft = Template.bind({});
bottomLeft.args = {
  direction: 'bottom left',
};

export const bottomRight = Template.bind({});
bottomRight.args = {
  direction: 'bottom right',
};

export const topLeft = Template.bind({});
topLeft.args = {
  direction: 'top left',
};

export const topRight = Template.bind({});
topRight.args = {
  direction: 'top right',
};
