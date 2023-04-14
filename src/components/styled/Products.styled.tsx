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
  /* display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 154px;

  width: 1464px;
  height: 64px;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0; */
`;

export const Filter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  /* gap: 40px; */

  /* width: 1051px;
  height: 59px; */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const FilterBy = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 16px;

  flex: none;
  order: 0;
  flex-grow: 0;

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

  flex: none;
  order: 2;
  flex-grow: 0;

  p {
    width: 71px;
    height: 27px;

    /* Desktop/Text/L1/Default| */

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

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  gap: 24px;

  width: 259px;
  height: 64px;

  /* Neutrals/300

Borders, Ghost UI, deactivated icons (over neutral-200)
*/
  border: 1px solid #dae4f2;
  border-radius: 16px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const LeftVectorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px;
  gap: 10px;

  /* Neutrals/200

Deactivated elements, Clicked BG
*/
  background: #e6edf7;
  border-radius: 8px;
  transform: rotate(-180deg);

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const LeftVector = styled(Image)`
  transform: rotate(-180deg);
`;
