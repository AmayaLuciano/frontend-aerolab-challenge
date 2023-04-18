'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import logo from '../../public/assets/icons/aerolab-logo-1.svg';
import icon from '../../public/assets/icons/aeropay-1.svg';
import row from '../../public/assets/icons/chevron-default.svg';
import PointsCard from './PointsCard';
import { StyledContainer } from './styled/Header/HeaderContainer.styled';
import { PointsBtn } from './styled/Header/PointsBtn.styled';
import { ImgStyled } from './styled/Header/ImgPoints.styled';

type Props = {};

type User = {
  createDate: string;
  name: string;
  points: number;
  redeemHistory: [];
  __v: number;
  _id: string;
};

// async function fetcher<JSON = any>(
//   input: RequestInfo,
//   init?: RequestInit
// ): Promise<JSON> {
//   const res = await fetch(input, init);
//   return res.json();
// }

const Header = (props: Props) => {
  // const { data, error } = useSWR(
  //   'https://coding-challenge-api.aerolab.co/user/points',
  //   fetcher
  // );
  const [user, setUser] = useState<User>({
    createDate: '',
    name: '',
    points: 0,
    redeemHistory: [],
    __v: 0,
    _id: '',
  });
  const [isLoading, setLoading] = useState(false);
  const [displayCard, setDisplayCard] = useState<boolean>(true);

  useEffect(() => {
    fetch('https://coding-challenge-api.aerolab.co/user/me', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM5ODQ2MDdiNWE0NTAwMjFiNWY1MDEiLCJpYXQiOjE2ODE0OTEwNDB9.M9Mdl9O9jqyO1Nxy0Jaw0rXoa_k07fo_hE7-Rv3eKvY`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
    console.log(user);
  }, []);
  return (
    <>
      <StyledContainer>
        <div>
          <Image alt="logo" src={logo} width={100} height={100} />
        </div>

        <PointsBtn onClick={() => setDisplayCard(!displayCard)}>
          <Image alt="icon" src={icon} width={32} height={32} />
          <p>{user.points}</p>
          <ImgStyled src={row} alt="row" />
        </PointsBtn>
      </StyledContainer>
      <PointsCard name={user.name} displayCard={displayCard} />
    </>
  );
};

export default Header;
