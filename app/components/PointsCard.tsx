import icon from '../../public/assets/icons/aeropay-2.svg';
import logo from '../../public/assets/icons/aeropay-3.svg';
import { addPoints, fetchData } from '../utils/functions';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import Image from 'next/image';

type User = {
  createDate: string;
  name: string;
  points: number;
  redeemHistory: [];
  __v: number;
  _id: string;
};

type Props = {
  displayCard: boolean;
};

const PointsCard = ({ displayCard }: Props) => {
  const [selected, setSelected] = useState<number>(0);
  const [points, setPoints] = useState<7500 | 5000 | 1000 | 0>(0);
  const {
    data: user,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['user'],
    queryFn: fetchData,
  });

  const addPointsAndrefetch = async (points: number) => {
    await addPoints(points);
    refetch();
  };
  return (
    <div
      className={`${
        displayCard === true ? `hidden` : `block`
      } absolute w-[312px] h-[404px] right-[220px] top-[104px] bg-[#ffffff]  z-10 shadow-2xl border-[1px] border-[#dae4f2] rounded-2xl`}
    >
      <div className="flex flex-col items-start justify-center p-4 gap-[10px] h-[59px] border-b-[1px] border-[#dae4f2]">
        <p className="text-[#252f3d] font-semibold">Add Balance</p>
      </div>
      <div className="flex flex-col justify-center items-center p-6 gap-[10px] absolute top-[58px] ">
        <div>
          <div className="flex flex-col justify-between w-[265px] h-[148px] bg-[#252f3d] rounded-lg py-4">
            <div className="flex justify-between px-4">
              <p className="text-[#f5f9ff] text-lg font-medium">Aerocard</p>
              <Image src={icon} alt="icon" />
            </div>
            <div className="flex justify-between items-center px-4 font-medium">
              <p className="text-[#f5f9ff]">{user?.name}</p>
              <p className="text-[#f5f9ff]">07/23</p>
            </div>
          </div>
        </div>
        <div className="flex-col justify-center items-center ">
          <div className="flex items-start gap-1 font-medium pt-6 pb-6">
            <button
              className={`${
                selected !== 1
                  ? 'bg-[#E6F0FF]'
                  : 'bg-gradient-to-r from-[#176feb] to-[#ff80ff]'
              } flex justify-center items-center cursor-pointer rounded-xl py-2 px-4 w-[85px]`}
              onClick={() => {
                setSelected(1);
                setPoints(1000);
              }}
            >
              <p
                className={`text-lg ${
                  selected !== 1
                    ? 'bg-gradient-to-r from-[#176feb] to-[#ff80ff] text-transparent bg-clip-text'
                    : 'text-white'
                }`}
              >
                1000
              </p>
            </button>
            <button
              className={`${
                selected !== 2
                  ? 'bg-[#E6F0FF]'
                  : 'bg-gradient-to-r from-[#176feb] to-[#ff80ff]'
              } flex justify-center items-center cursor-pointer rounded-xl py-2 px-4 w-[85px]`}
              onClick={() => {
                setSelected(2);
                setPoints(1000);
              }}
            >
              <p
                className={`text-lg ${
                  selected !== 2
                    ? 'bg-gradient-to-r from-[#176feb] to-[#ff80ff] text-transparent bg-clip-text'
                    : 'text-white'
                }`}
              >
                5000
              </p>
            </button>
            <button
              className={`${
                selected !== 3
                  ? 'bg-[#E6F0FF]'
                  : 'bg-gradient-to-r from-[#176feb] to-[#ff80ff]'
              } flex justify-center items-center cursor-pointer rounded-xl py-2 px-4 w-[85px]`}
              onClick={() => {
                setSelected(3);
                setPoints(1000);
              }}
            >
              <p
                className={`text-lg ${
                  selected !== 3
                    ? 'bg-gradient-to-r from-[#176feb] to-[#ff80ff] text-transparent bg-clip-text'
                    : 'text-white'
                }`}
              >
                7500
              </p>
            </button>
          </div>

          <div
            className="flex justify-center items-center cursor-pointer w-[264px] bg-gradient-to-r from-[#176feb] to-[#ff80ff] h-[51px] rounded-2xl gap-2"
            onClick={() => {
              addPointsAndrefetch(points);
            }}
          >
            <Image src={logo} alt="icon" />
            <p className="text-lg text-white font-medium">Add Points</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointsCard;
