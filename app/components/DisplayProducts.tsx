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

type Props = {};

const getProducts = async () => {
  const res = await fetch('https://coding-challenge-api.aerolab.co/products', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM5ODQ2MDdiNWE0NTAwMjFiNWY1MDEiLCJpYXQiOjE2ODE0OTEwNDB9.M9Mdl9O9jqyO1Nxy0Jaw0rXoa_k07fo_hE7-Rv3eKvY`,
    },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

const DisplayProducts = async (props: Props) => {
  const data: ProductsType[] = await getProducts();

  const highestPrice = () => {
    const sortedArray = data.sort((a, b) => a.cost - b.cost);
    sortedArray.map((p) => {
      return (
        <Card key={p._id}>
          <ProductCard>
            <ImageContainer>
              <ProductImage
                src={p.img.url}
                width={500}
                height={500}
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
    });
  };

  return (
    <>
      <ProductsContainer>
        {/* {data.map((p) => {
        return (
          <Card key={p._id}>
            <ProductCard>
              <ImageContainer>
                <ProductImage
                  src={p.img.url}
                  width={500}
                  height={500}
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
      })} */}
      </ProductsContainer>
    </>
  );
};

export default DisplayProducts;
