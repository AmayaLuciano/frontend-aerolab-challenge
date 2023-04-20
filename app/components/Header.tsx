import Image from 'next/image';
import logo from '../../public/assets/icons/aerolab-logo-1.svg';
import PointsHeader from './PointsHeader';
import PointsCard from './PointsCard';

type Props = {};

type User = {
  createDate: string;
  name: string;
  points: number;
  redeemHistory: [];
  __v: number;
  _id: string;
};
const Header = async (props: Props) => {
  return (
    <div className="ml-[228px] mr-[228px] flex flex-row justify-between py-[40px] items-center">
      <div>
        <Image alt="logo" src={logo} width={100} height={100} />
      </div>
      <PointsHeader />
    </div>
  );
};

export default Header;
