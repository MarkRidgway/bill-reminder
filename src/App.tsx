import React from 'react';
import List from '@mui/material/List';

import { Bill, IBillProps } from './components';

const bills: IBillProps[] = [
  {
    amount: 45.65,
    title: 'Internet',
    date: new Date(2021, 12, 6),
  },
  {
    amount: 0,
    title: 'Cable',
    date: new Date(2021, 12, 10),
  },
  {
    amount: 302,
    title: 'Car',
    date: new Date(2021, 12, 22),
  },
  {
    amount: 1800,
    title: 'Mortgage',
    date: new Date(2022, 1, 6),
  },
];

new Date(1987, 1, 11);
function App() {
  return (
    <div className='App'>
      <List sx={{ maxWidth: 600 }}>
        {bills.map((bill) => (
          <Bill key={`${bill.title}-${bill.date.toISOString()}`} {...bill} />
        ))}
      </List>
    </div>
  );
}

export default App;
