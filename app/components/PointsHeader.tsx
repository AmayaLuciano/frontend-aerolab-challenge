'use client';
import icon from '../../public/assets/icons/aeropay-1.svg';
import row from '../../public/assets/icons/chevron-default.svg';
import PointsCard from './PointsCard';
import { PointsBtn } from './styled/Header/PointsBtn.styled';
import { ImgStyled } from './styled/Header/ImgPoints.styled';
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
    return <p>Loading...</p>;
  }
  return (
    <>
      <PointsBtn onClick={() => setDisplayCard(!displayCard)}>
        <Image alt="icon" src={icon} width={32} height={32} />
        <p>{data?.points}</p>
        <ImgStyled src={row} alt="row" />
      </PointsBtn>

      <PointsCard displayCard={displayCard} />
    </>
  );
};

export default PointsHeader;
