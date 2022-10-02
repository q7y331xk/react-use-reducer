import { NextPage } from 'next';
import { HTMLAttributes } from 'react';

interface Props {
  text: string;
  btnAttr?: HTMLAttributes<HTMLButtonElement>;
}

const BtnTextRoundCorner: NextPage<Props> = ({ text, btnAttr }) => {
  return <button {...btnAttr}>{text}</button>
}

export default BtnTextRoundCorner;