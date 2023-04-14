import React from 'react';
import { ProductsType } from '../../types';
import {
  BtnText,
  Card,
  Description,
  DescriptionBox,
  Icon,
  ImageContainer,
  Price,
  PriceBox,
  ProductBtn,
  ProductCard,
  ProductImage,
  ProductsContainer,
  Title,
} from './styled/ProductsPage/ProductsSection.styled';
import icon from '../../public/assets/icons/aeropay-3.svg';

type Props = {
  data: ProductsType[];
};

const DisplayProducts = ({ data }: Props) => {
  return (
    <ProductsContainer>
      {data?.map((p) => {
        return (
          <Card key={p._id}>
            <ProductCard>
              <ImageContainer>
                <ProductImage
                  src={p.img.url}
                  width={80}
                  height={100}
                  alt="product"
                />
              </ImageContainer>
              <DescriptionBox>
                <Title>{p.name}</Title>
                <Description>{p.category}</Description>
              </DescriptionBox>
            </ProductCard>

            <ProductBtn>
              <BtnText>Redeem for</BtnText>
              <PriceBox>
                <Icon src={icon} alt="icon" />
                <Price>{p.cost}</Price>
              </PriceBox>
            </ProductBtn>
          </Card>
        );
      })}
    </ProductsContainer>
  );
};

export default DisplayProducts;
