import React from 'react';
import { format } from 'date-fns';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import { toUsd } from '../../utils/currency';

export interface IBillProps {
  title: string;
  amount: number;
  date: Date;
}

export const Bill: React.FC<IBillProps> = ({ amount, title, date }) => (
  <ListItem divider={true}>
    <ListItemText disableTypography={true} sx={{ display: 'flex' }}>
      <Typography sx={{ mr: 8 }}>{title}</Typography>
      <Typography>{toUsd(amount)}</Typography>
      <Typography sx={{ order: -1, mr: 8 }}>{format(date, 'do')}</Typography>
    </ListItemText>
  </ListItem>
);
