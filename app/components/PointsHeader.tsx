'use client';
import icon from '../../public/assets/icons/aeropay-1.svg';
import row from '../../public/assets/icons/chevron-default.svg';
import PointsCard from './PointsCard';
import Image from 'next/image';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../utils/functions';

type User = {
  createDate: string;
  name: string;
  points: number;
  redeemHistory: [];
  __v: number;
  _id: string;
};

type Props = {};

const PointsHeader = (props: Props) => {
  const { data, isLoading, refetch } = useQuery(['user'], fetchData);

  const [displayCard, setDisplayCard] = useState<boolean>(true);

  if (isLoading) {
    return (
      <button
        onClick={() => setDisplayCard(!displayCard)}
        className="flex items-center px-[8px] py-[16px] gap-[16px] cursor-pointer w-[172px] h-[48px] bg-[#ffffff] border-[1px] border-[#dae4f2] rounded-2xl shadow-sm"
      >
        <Image alt="icon" src={icon} width={32} height={32} />
        <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#176feb] to-[#ff80ff]">
          ...
        </p>
        <Image className="rotate-90" src={row} alt="row" />
      </button>
    );
  }
  return (
    <div className="relative">
      <button
        onClick={() => setDisplayCard(!displayCard)}
        className="flex items-center px-[8px] py-[16px] gap-[16px] cursor-pointer w-[172px] h-[48px] bg-[#ffffff] border-[1px] border-[#dae4f2] rounded-2xl shadow-sm z-10"
      >
        <Image alt="icon" src={icon} width={32} height={32} />
        <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#176feb] to-[#ff80ff]">
          {data?.points}
        </p>
        <Image className="rotate-90" src={row} alt="row" />
      </button>
      <PointsCard displayCard={displayCard} />
    </div>
  );
};

export default PointsHeader;
