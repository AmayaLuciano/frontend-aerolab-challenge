import Image from 'next/image';
import styled from 'styled-components';

export const BgWalkthrough = styled.div`
  display: flex;
  justify-content: center;
  height: 528px;
  width: 100%;
  background: linear-gradient(
    102.47deg,
    rgba(23, 111, 235, 0.5) -5.34%,
    rgba(255, 128, 255, 0.5) 106.58%
  );
`;

export const CardLeft = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px;
  margin-top: -92px;
  width: 532px;
  height: 676px;
  background: #ffffff;
  border: 1px solid #dae4f2;
  box-shadow: 0px 2px 40px rgba(0, 0, 0, 0.05);
  border-radius: 32px;
  transform: rotate(-3deg);
`;
export const CardMiddle = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px;
  margin-left: -80px;
  margin-top: -120px;

  width: 532px;
  height: 676px;
  background: #ffffff;
  border: 1px solid #dae4f2;

  box-shadow: 0px 2px 40px rgba(0, 0, 0, 0.05);
  border-radius: 32px;
  transform: rotate(0deg);
`;

export const CardRight = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px;
  margin-top: -89px;
  margin-left: -80px;

  width: 532px;
  height: 676px;

  background: #ffffff;

  border: 1px solid #dae4f2;

  box-shadow: 0px 2px 40px rgba(0, 0, 0, 0.05);
  border-radius: 32px;
  transform: rotate(3deg);
`;
export const ImageCard = styled(Image)`
  box-sizing: border-box;
  width: 508px;
  height: 498px;
  background: linear-gradient(
    102.47deg,
    #7296eb -5.34%,
    #eac0e9 106.58%,
    #eac0e9 106.58%
  );
  border: 1px solid #dae4f2;
  border-radius: 24px 24px 0px 0px;
`;

export const TopCard = styled.div`
  width: 508px;
  height: 498px;

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 1;
`;

export const BottomCard = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 16px 24px 24px;
  gap: 12px;
  width: 508px;
  height: 154px;
  background: #ffffff;
  border: 1px solid #dae4f2;
  border-radius: 0px 0px 24px 24px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 16px;
  margin-top: 30px;

  width: 280px;
  height: 48px;
`;

export const Icon = styled(Image)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 4px;
  gap: 2px;

  width: 48px;
  height: 48px;

  background: #e5f0ff;
  border-radius: 8px;
`;

export const Title = styled.p`
  width: 201px;
  height: 32px;

  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 100%;

  text-transform: uppercase;

  background: linear-gradient(102.47deg, #176feb -5.34%, #ff80ff 106.58%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Text = styled.p`
  width: 365px;
  height: 54px;
  margin-top: 5px;

  font-style: normal;
  font-weight: lighter;
  font-size: 18px;
  line-height: 150%;

  color: #7c899c;
`;
