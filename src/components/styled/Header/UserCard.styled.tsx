import Image from 'next/image';
import styled from 'styled-components';

type Props = {
  isDisplay: boolean;
};

export const CardContainer = styled.div`
  ${({ isDisplay }: Props) =>
    isDisplay === true
      ? `
    display:none
 `
      : `
 display:block
 `};
  position: absolute;
  width: 312px;
  height: 404px;
  right: 220px;
  top: 134px;

  background: #ffffff;

  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  z-index: 1;
`;

export const Header = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 16px;
  gap: 10px;
  height: 59px;

  border: 1px solid #dae4f2;
  border-radius: 16px 16px 0px 0px;

  p {
    width: 264px;
    height: 27px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;

    color: #252f3d;
  }
`;

export const CardBody = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  gap: 10px;

  position: absolute;
  left: 0px;
  right: 0px;
  top: 58px;
  bottom: 0px;

  /* Neutrals/300

Borders, Ghost UI, deactivated icons (over neutral-200)
*/
  border: 1px solid #dae4f2;
  border-radius: 0px 0px 16px 16px;
`;

export const BodyContainer = styled.div`
  padding: 0px;
  gap: 40px;

  width: 264px;
  height: 298px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 264px;
  height: 148px;

  filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.05));
  background: #252f3d;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 115px;

  margin-inline: 16px;
`;

export const Brand = styled.p`
  width: 85px;
  height: 27px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: lighter;
  font-size: 18px;
  line-height: 150%;

  color: #f5f9ff;
`;

export const Logo = styled(Image)`
  width: 24px;
  height: 24px;
  background: #f5f9ff;
  border-radius: 40px;
`;

export const Data = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 46px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: lighter;
  font-size: 14px;
  line-height: 150%;

  margin-inline: 16px;
`;

export const Name = styled.p`
  width: 68px;
  height: 21px;
  color: #f5f9ff;
`;

export const Date = styled.p`
  width: 39px;
  height: 21px;

  text-align: right;

  color: #f5f9ff;
`;

export const PointsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 24px;
`;

export const AmountContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 4px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 85.33px;
    height: 35px;

    background: #e6f0ff;
    border-radius: 12px;

    p {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: lighter;
      font-size: 18px;
      line-height: 150%;

      background: linear-gradient(102.47deg, #176feb -5.34%, #ff80ff 106.58%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }
`;

export const PointsBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 8px;

  width: 264px;
  height: 51px;

  background: linear-gradient(102.47deg, #176feb -5.34%, #ff80ff 106.58%);

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  border-radius: 16px;

  p {
    /* width: 102px;
    height: 27px; */

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: lighter;
    font-size: 18px;
    line-height: 150%;

    color: #ffffff;
  }
`;
