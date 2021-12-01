import React from 'react';
import { render } from '@testing-library/react';

import { Bill, IBillProps } from './Bill';

const billContent: IBillProps = {
  amount: 20,
  date: new Date(2021, 12, 6),
  title: 'this is the title',
};

describe('Bill', () => {
  it('should render', () => {
    const { getByText } = render(<Bill {...billContent} />);

    expect(getByText(billContent.title)).toBeTruthy();
    expect(getByText('6th')).toBeTruthy();
    expect(getByText('$20.00')).toBeTruthy();
  });
});
