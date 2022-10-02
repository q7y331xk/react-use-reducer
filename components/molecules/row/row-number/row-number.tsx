import { NextPage } from 'next';
import { HTMLAttributes } from 'react';
import BtnTextRoundCorner from '../../../atoms/btn/btn-text-round-corner/btn-text-round-corner';
import DivNumber from '../../../atoms/div/number/div-number';

interface Props {
  number: number;
  text: string;

  btnAttr?: HTMLAttributes<HTMLButtonElement>;
}

const RowNumber:NextPage<Props> = ({ number, text, btnAttr }) => {

  return <div>
    <DivNumber number={number} />
    <BtnTextRoundCorner text={text} btnAttr={btnAttr} />
  </div>
}

export default RowNumber;