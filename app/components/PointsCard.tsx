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
  PointsBtn,
} from './styled/Header/UserCard.styled';

import icon from '../../public/assets/icons/aeropay-2.svg';
import { Icon } from './styled/ProductsPage/ProductsSection.styled';
import logo from '../../public/assets/icons/aeropay-3.svg';
import { addPoints, fetchData } from '../utils/functions';
import { useQuery } from '@tanstack/react-query';

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
  const {
    data: user,
    isLoading,
    refetch,
  } = useQuery({
    //      ^? const user: User
    queryKey: ['user'],
    queryFn: fetchData,
  });

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
            <div
              onClick={() => {
                addPoints(1000);
                refetch();
              }}
            >
              <p>1000</p>
            </div>
            <div>
              <p>5000</p>
            </div>
            <div>
              <p>7500</p>
            </div>
          </AmountContainer>

          <PointsBtn>
            <Icon src={logo} alt="icon" />
            <p>Add Points</p>
          </PointsBtn>
        </PointsContainer>
      </CardBody>
    </CardContainer>
  );
};

export default PointsCard;
