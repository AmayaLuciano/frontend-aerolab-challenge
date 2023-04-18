import styled from 'styled-components';

export const PointsBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 16px;
  cursor: pointer;

  width: 172px;
  height: 48px;

  background: #ffffff;
  border: 1px solid #dae4f2;

  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  flex: none;
  order: 1;
  flex-grow: 0;

  p {
    width: 60px;
    height: 27px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 150%;

    background: linear-gradient(102.47deg, #176feb -5.34%, #ff80ff 106.58%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;
