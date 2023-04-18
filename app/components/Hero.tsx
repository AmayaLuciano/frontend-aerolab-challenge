'use client';
import ilustration from '../../public/assets/illustrations/hero-desktop.png';
import Image from 'next/image';
import {
  IlustrationBg,
  IlustrationContainer,
  IlustrationImage,
} from './styled/Ilustration.styled';
import {
  Button,
  ButtonContainer,
  CopyContainer,
  Heading,
  HeadingBottom,
  HeadingContainer,
  HeadingTop,
  Icon,
  Text,
  Title,
} from './styled/Copy.styled';
import { HeroContainer } from './styled/HeroContainer.styled';
import vector from '../../public/assets/icons/Icons.svg';

type Props = {};

const Hero = (props: Props) => {
  return (
    <HeroContainer>
      <HeadingContainer>
        <CopyContainer>
          <Title>explore the</Title>
          <Heading>
            <HeadingTop>tech</HeadingTop>
            <HeadingBottom>zone</HeadingBottom>
          </Heading>
        </CopyContainer>
        <Text>
          Here you’ll be able to exchange all of your hard-earned Aeropoints and
          exchange them for cool tech.
        </Text>
        <ButtonContainer>
          <Button>view all products</Button>
          <Icon src={vector} alt="vector" />
        </ButtonContainer>
      </HeadingContainer>

      <IlustrationContainer>
        <IlustrationBg />
        <IlustrationImage src={ilustration} alt="ilustration" />
      </IlustrationContainer>
    </HeroContainer>
  );
};

export default Hero;
