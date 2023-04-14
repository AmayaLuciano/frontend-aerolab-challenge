import Image from 'next/image';
import React from 'react';
import {
  BgWalkthrough,
  BottomCard,
  CardLeft,
  CardMiddle,
  CardRight,
  Icon,
  ImageCard,
  Text,
  Title,
  TitleContainer,
  TopCard,
} from './styled/WalkThrough.styled';
import card1 from '../../public/assets/illustrations/walkthroug-1-desktop.png';
import card2 from '../../public/assets/illustrations/walkthroug-2-desktop.png';
import card3 from '../../public/assets/illustrations/walkthroug-3-desktop.png';
import icon1 from '../../public/assets/icons/walkthrough-1.svg';
import icon2 from '../../public/assets/icons/walkthrough-2.svg';
import icon3 from '../../public/assets/icons/walkthrough-3.svg';

type Props = {};

const Walkthrough = (props: Props) => {
  return (
    <BgWalkthrough>
      <CardLeft>
        <TopCard>
          <ImageCard src={card1} alt="card" />
        </TopCard>
        <BottomCard>
          <TitleContainer>
            <Icon src={icon1} alt="icon" />
            <Title>1—browse</Title>
          </TitleContainer>
          <Text>
            Browse our tech catalog with more than 20 top tech products
          </Text>
        </BottomCard>
      </CardLeft>

      <CardMiddle>
        <TopCard>
          <ImageCard src={card2} alt="card" />
        </TopCard>
        <BottomCard>
          <TitleContainer>
            <Icon src={icon2} alt="icon" />
            <Title>2—choose</Title>
          </TitleContainer>
          <Text>
            Browse our tech catalog with more than 20 top tech products
          </Text>
        </BottomCard>
      </CardMiddle>

      <CardRight>
        <TopCard>
          <ImageCard src={card3} alt="card" />
        </TopCard>
        <BottomCard>
          <TitleContainer>
            <Icon src={icon3} alt="icon" />
            <Title>3—enjoy!</Title>
          </TitleContainer>
          <Text>
            Browse our tech catalog with more than 20 top tech products
          </Text>
        </BottomCard>
      </CardRight>
    </BgWalkthrough>
  );
};

export default Walkthrough;
