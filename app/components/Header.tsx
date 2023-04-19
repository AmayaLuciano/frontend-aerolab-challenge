import Image from 'next/image';
import logo from '../../public/assets/icons/aerolab-logo-1.svg';
import { StyledContainer } from './styled/Header/HeaderContainer.styled';
import PointsHeader from './PointsHeader';
import { useQuery } from '@tanstack/react-query';

type Props = {};

type User = {
  createDate: string;
  name: string;
  points: number;
  redeemHistory: [];
  __v: number;
  _id: string;
};

// const getUser = async () => {
//   const res = await fetch('https://coding-challenge-api.aerolab.co/user/me', {
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//       Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM5ODQ2MDdiNWE0NTAwMjFiNWY1MDEiLCJpYXQiOjE2ODE0OTEwNDB9.M9Mdl9O9jqyO1Nxy0Jaw0rXoa_k07fo_hE7-Rv3eKvY`,
//     },
//   });
//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   return res.json();
// };

const fetchData = async () => {
  const res = await fetch('https://coding-challenge-api.aerolab.co/user/me', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM5ODQ2MDdiNWE0NTAwMjFiNWY1MDEiLCJpYXQiOjE2ODE0OTEwNDB9.M9Mdl9O9jqyO1Nxy0Jaw0rXoa_k07fo_hE7-Rv3eKvY`,
    },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

const Header = async (props: Props) => {
  // const { data } = useQuery(['user'], fetchData);
  // const user: User = await getUser();

  return (
    <>
      <StyledContainer>
        <div>
          <Image alt="logo" src={logo} width={100} height={100} />
        </div>
        <PointsHeader />
        {/* user={data} */}
      </StyledContainer>
    </>
  );
};

export default Header;
