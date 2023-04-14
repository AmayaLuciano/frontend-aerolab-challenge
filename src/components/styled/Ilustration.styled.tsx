import Image from 'next/image';
import styled from 'styled-components';

export const IlustrationContainer = styled.div`
  /* position: absolute; */
  width: 897px;
  height: 795px;
  /* right: 141px;
  top: 45px; */
`;

export const IlustrationImage = styled(Image)`
  position: absolute;
  right: 150px;
  top: 23px;
  width: 897px;
  height: 825px;
`;

export const IlustrationBg = styled.div`
  margin-inline: auto;
  margin-top: 0px;
  width: 722px;
  height: 600px;
  /* position: absolute;
  left: 88px;
  top: 195px; */

  background: linear-gradient(
    102.47deg,
    rgba(23, 111, 235, 0.5) -5.34%,
    rgba(255, 128, 255, 0.5) 106.58%
  );
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);
  border-radius: 104px;
`;
