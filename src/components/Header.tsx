import Image from 'next/image';
import React from 'react';
import logo from '../../public/assets/icons/aerolab-logo-1.svg';
import { StyledContainer } from './styled/HeaderContainer.styled';
import { PointsBtn } from './styled/PointsBtn.styled';
import icon from '../../public/assets/icons/aeropay-1.svg';
import row from '../../public/assets/icons/chevron-default.svg';
import { ImgStyled } from './styled/ImgPoints.styled';

type Props = {};

const Header = (props: Props) => {
  return (
    <StyledContainer>
      <div>
        <Image alt="logo" src={logo} width={100} height={100} />
      </div>
      <PointsBtn>
        <Image alt="icon" src={icon} width={32} height={32} />
        <p>10000</p>
        <ImgStyled src={row} alt="row" />
      </PointsBtn>
    </StyledContainer>
  );
};

export default Header;
