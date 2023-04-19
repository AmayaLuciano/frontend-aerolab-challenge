import {
  AmountContainer,
  BodyContainer,
  Brand,
  Card,
  CardBody,
  CardContainer,
  CardHeader,
  Data,
  Date,
  Header,
  Logo,
  Name,
  PointsContainer,
  AddPointsBtn,
  PointsBtn3,
  PointsBtn1,
  PointsBtn2,
} from './styled/Header/UserCard.styled';

import icon from '../../public/assets/icons/aeropay-2.svg';
import { Icon } from './styled/ProductsPage/ProductsSection.styled';
import logo from '../../public/assets/icons/aeropay-3.svg';
import { addPoints, fetchData } from '../utils/functions';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

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
    <CardContainer isDisplay={displayCard}>
      <Header>
        <p>Add Balance</p>
      </Header>
      <CardBody>
        <BodyContainer>
          <Card>
            <CardHeader>
              <Brand>Aerocard</Brand>
              <Logo src={icon} alt="icon" />
            </CardHeader>
            <Data>
              <Name>{user?.name}</Name>
              <Date>07/23</Date>
            </Data>
          </Card>
        </BodyContainer>
        <PointsContainer>
          <AmountContainer>
            <PointsBtn1
              selected={selected}
              onClick={() => {
                setSelected(1);
                setPoints(1000);
              }}
            >
              <p>1000</p>
            </PointsBtn1>
            <PointsBtn2
              selected={selected}
              onClick={() => {
                setSelected(2);
                setPoints(5000);
              }}
            >
              <p>5000</p>
            </PointsBtn2>
            <PointsBtn3
              selected={selected}
              onClick={() => {
                setSelected(3);
                setPoints(7500);
              }}
            >
              <p>7500</p>
            </PointsBtn3>
          </AmountContainer>

          <AddPointsBtn
            onClick={() => {
              addPointsAndrefetch(points);
            }}
          >
            <Icon src={logo} alt="icon" />
            <p>Add Points</p>
          </AddPointsBtn>
        </PointsContainer>
      </CardBody>
    </CardContainer>
  );
};

export default PointsCard;
