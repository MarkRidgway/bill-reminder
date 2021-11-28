import React from 'react'

import * as Styled from './BillList.style';

export const BillList:React.FC = ({ children }) => (
  <Styled.List>
    { children }
  </Styled.List>
);
