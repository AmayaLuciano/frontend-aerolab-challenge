'use client';
import Image from 'next/image';
import styled from 'styled-components';

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: auto;
  width: 1464px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin-bottom: 80px;

  width: 348px;
  height: 506px;
`;

export const ProductCard = styled.div`
  /* width: 348px; */
  height: 431px;
  filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.05));

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 1;
`;

export const ImageContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 348px;
  height: 344.92px;

  background: #ffffff;

  border: 1px solid #dae4f2;
  border-radius: 16px 16px 0px 0px;
`;

export const ProductImage = styled(Image)`
  width: 280px;
  height: 204px;
`;

export const DescriptionBox = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  padding-left: 16px;

  height: 88px;

  background: #ffffff;

  border: 1px solid #dae4f2;
  border-radius: 0px 0px 16px 16px;
`;

export const Title = styled.p`
  width: 300px;

  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  color: #252f3d;
`;

export const Description = styled.p`
  width: 300px;

  font-size: 14px;
  line-height: 150%;
  margin-top: -18px;

  letter-spacing: 0.05em;
  text-transform: uppercase;

  color: #7c899c;
`;

export const ProductBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;

  width: 348px;
  height: 59px;

  background: linear-gradient(102.47deg, #176feb -5.34%, #ff80ff 106.58%);

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  border-radius: 16px;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;
export const BtnText = styled.p`
  font-style: normal;
  font-weight: lighter;
  font-size: 18px;
  line-height: 150%;

  color: #ffffff;
`;

export const PriceBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 8px;
`;

export const Icon = styled(Image)`
  width: 24px;
  height: 24px;

  background: #ffffff;
  border-radius: 40px;
`;
export const Price = styled.p`
  font-style: normal;
  font-weight: lighter;
  font-size: 18px;
  line-height: 150%;

  color: #ffffff;
`;
