import Image from 'next/image';
import styled from 'styled-components';

export const ProductSection = styled.div`
  margin-top: 280px;
  height: 2598px;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 40px;
  margin-inline: 228px;
  width: 1464px;
  height: 142px;
`;

export const HeaderTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  margin-inline: 228px;
  width: 1464px;
  height: 142px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 900;
  font-size: 33px;

  text-transform: uppercase;
`;

export const HeaderLeft = styled.h2`
  text-transform: uppercase;
  background: linear-gradient(102.47deg, #176feb -5.34%, #ff80ff 106.58%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-right: 15px;
`;
export const HeaderRight = styled.h2`
  font-family: 'Montserrat';
  color: #252f3d;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 154px;

  width: 1464px;
  height: 64px;
`;

export const Filter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
`;

export const FilterBy = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 16px;

  p {
    width: 81px;
    height: 27px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: lighter;
    font-size: 18px;
    line-height: 150%;
    color: #7c899c;
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px 8px 16px 24px;
    width: 256px;
    height: 59px;
    background: #ffffff;
    border: 1px solid #dae4f2;
    border-radius: 16px;

    p {
      width: 120px;
    }
  }
`;

export const SortBy = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 16px;

  width: 646px;
  height: 43px;
  margin-left: 100px;

  p {
    width: 71px;
    height: 27px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: lighter;
    font-size: 18px;
    line-height: 150%;

    color: #7c899c;
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 24px;
    gap: 10px;
    cursor: pointer;

    width: 175px;
    height: 43px;

    background: linear-gradient(102.47deg, #176feb -5.34%, #ff80ff 106.58%);
    border-radius: 12px;
    border: none;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: lighter;
    font-size: 17px;
    line-height: 150%;
    color: #f5f9ff;
  }
`;

export const PageFilter = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  gap: 24px;

  width: 259px;
  height: 64px;

  border: 1px solid #dae4f2;
  border-radius: 16px;
`;

export const LeftVectorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px;
  gap: 10px;

  background: #e6edf7;
  border-radius: 8px;
`;

export const LeftVector = styled(Image)`
  transform: rotate(-180deg);
`;
export const RightVectorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px;
  gap: 10px;

  background: #e6edf7;
  border-radius: 8px;
`;

export const RightVector = styled(Image)`
  transform: rotate(0deg);
`;

export const Pager = styled.div`
  display: flex;
  width: 99px;
  gap: 5px;
`;

export const PageText = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: lighter;
  font-size: 18px;
  line-height: 150%;
  color: #7c899c;
`;

export const NumberText = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: lighter;
  font-size: 18px;
  line-height: 150%;
  background: linear-gradient(102.47deg, #176feb -5.34%, #ff80ff 106.58%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;
