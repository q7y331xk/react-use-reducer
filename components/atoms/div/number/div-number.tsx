import { NextPage } from 'next';

interface Props {
  number: number;
}

const DivNumber: NextPage<Props> = ({ number }) => {
  const numberView = String(number);
  return <div>
    {numberView}
  </div>
}

export default DivNumber;