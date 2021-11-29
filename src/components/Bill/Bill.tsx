import React from 'react';
import { format } from 'date-fns';

import { toUsd } from '../../utils/currency';

import { BillList } from './BillList';
import * as Styled from './Bill.styles';

interface IBill {
  List: React.FC;
}

export interface IBillProps {
  title: string;
  amount: number;
  date: Date;
}

export const Bill: React.FC<IBillProps> & IBill = ({ amount, title, date }) => (
  <li>
    <Styled.Text>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Amount>{toUsd(amount)}</Styled.Amount>
      <Styled.Date>{format(date, 'do')}</Styled.Date>
    </Styled.Text>
  </li>
);

Bill.List = BillList;
