import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: 87px;
  padding: 0px;
  gap: 64px;
  width: 602px;
  height: 577px;
  /* position: absolute;
  left: 228px;
  top: 240px; */
`;

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  margin-left: 87px;

  width: 602px;
  height: 433px;
`;

export const CopyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 602px;
  height: 355px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Title = styled.p`
  width: 178px; //va 174px, debe ser por la font.
  height: 27px;

  /* Desktop/Text/L1/All Caps - 24% LS */

  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  /* identical to box height, or 27px */

  letter-spacing: 0.24em;
  text-transform: uppercase;

  /* Neutrals/600 */

  color: #7c899c;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Heading = styled.div`
  display: block;
  text-transform: uppercase;
`;
export const HeadingTop = styled.h2`
  margin-top: -20px;
  width: 602px;
  height: 320px;
  font-style: normal;
  font-weight: 900;
  font-size: 200px;
  line-height: 80%;
  /* or 160px */

  background: linear-gradient(102.47deg, #176feb -5.34%, #ff80ff 106.58%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const HeadingBottom = styled.h2`
  font-style: normal;
  font-weight: 900;
  font-size: 200px;
  line-height: 80%;
  color: #252f3d;
  margin-top: -330px;
`;

export const Text = styled.div`
  width: 523px;
  height: 54px;

  /* Desktop/Text/L1/Default| */

  font-style: normal;
  font-weight: lighter;
  font-size: 18px;
  line-height: 150%;
  margin-top: 10px;
  /* or 27px */

  /* Neutrals/600 */

  color: #7c899c;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;

  width: 318px;
  height: 80px;

  background: linear-gradient(102.47deg, #176feb -5.34%, #ff80ff 106.58%);

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  border-radius: 24px;

  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const Button = styled.p`
  font-weight: lighter;
  font-size: 18px;
  text-transform: uppercase;
  color: white;
`;

export const Icon = styled(Image)`
  margin-left: 8px;
  width: 30px;
  height: 30px;
`;
