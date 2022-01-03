import {Meta, Story} from "@storybook/preact";

import { Button } from './Button';
import type { Props } from './Button'

// More on default export: https://storybook.js.org/docs/preact/writing-stories/introduction#default-export
export default {
    title: 'Example/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
        onClick: { action: 'onClick' },
    },
} as Meta;


// More on component templates: https://storybook.js.org/docs/preact/writing-stories/introduction#using-args
const Template:Story<Props> = (args:Props) => <Button {...args} />;

const Primary = Template.bind({});

// More on args: https://storybook.js.org/docs/preact/writing-stories/args
Primary.args = {
  isPrimary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
