import { NextPage } from 'next';
import { ReactNode } from 'react';
import RowNumber from '../../../molecules/row/row-number/row-number';

interface Props {
  children?: ReactNode;
}


const BoardRowsRoundedMain: NextPage<Props> = ({ children }) => {
    
  return <div>
    {children}
  </div>
}

export const BoardRowsRounded = Object.assign(BoardRowsRoundedMain, {
  Row: RowNumber
});