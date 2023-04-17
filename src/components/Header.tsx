import Image from 'next/image';
import React, { useState } from 'react';
import logo from '../../public/assets/icons/aerolab-logo-1.svg';
import { StyledContainer } from './styled/HeaderContainer.styled';
import { PointsBtn } from './styled/PointsBtn.styled';
import icon from '../../public/assets/icons/aeropay-1.svg';
import row from '../../public/assets/icons/chevron-default.svg';
import { ImgStyled } from './styled/ImgPoints.styled';
import PointsCard from './PointsCard';

type Props = {};

const Header = (props: Props) => {
  const [displayCard, setDisplayCard] = useState<boolean>(false);
  return (
    <>
      <StyledContainer>
        <div>
          <Image alt="logo" src={logo} width={100} height={100} />
        </div>

        <PointsBtn onClick={() => setDisplayCard(!displayCard)}>
          <Image alt="icon" src={icon} width={32} height={32} />
          <p>1000</p>
          <ImgStyled src={row} alt="row" />
        </PointsBtn>
      </StyledContainer>
      <PointsCard displayCard={displayCard} />
    </>
  );
};

export default Header;
