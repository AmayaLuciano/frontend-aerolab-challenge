import Image from 'next/image';
import logo from '../../public/assets/icons/aerolab-logo-1.svg';
import logoMobile from '../../public/assets/icons/aerolab-logo-2.svg';
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
    <div className="px-5 py-10 lg:w-[985px] lg:mx-auto xl:ml-[228px] xl:mr-[228px] flex flex-row justify-between xl:py-[40px] items-center ">
      <div>
        <Image
          className="xl:hidden"
          alt="logo"
          src={logoMobile}
          width={50}
          height={50}
        />
        <div className="hidden xl:block">
          <Image alt="logo" src={logo} width={100} height={100} />
        </div>
      </div>
      <PointsHeader />
    </div>
  );
};

export default Header;
