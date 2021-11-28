import React from 'react';
import { Meta, Story, ArgTypes } from '@storybook/react';

import { Bill as BillComponent, IBillProps } from './Bill';

export default {
  title: 'Components/Bill',
} as Meta;

interface IBillTemplateProps extends IBillProps {
  loading: boolean;
}

const BillTemplate: Story<IBillTemplateProps> = ({ loading, ...billProps }) => (
  <div>{loading ? 'loading' : <BillComponent {...billProps} />}</div>
);

export const Bill = BillTemplate.bind({});

Bill.argTypes = {
  loading: {
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
  title: {
    defaultValue: 'Mortgage',
    control: {
      type: 'text',
    },
  },
  amount: {
    defaultValue: 1200,
    control: {
      type: 'number',
    },
  },
  date: {
    defaultValue: new Date(),
    control: {
      type: 'date',
    },
  },
} as ArgTypes;
