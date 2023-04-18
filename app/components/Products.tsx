'use client';
import { ProductsType } from '../../types';
import { ProductSection } from './styled/Products.styled';
import ProductsHeader from './ProductsHeader';
import DisplayProducts from './DisplayProducts';

type Props = {
  data: ProductsType[];
};

const Products = ({ data }: Props) => {
  return (
    <ProductSection>
      <ProductsHeader />
      <DisplayProducts data={data} />
    </ProductSection>
  );
};

export default Products;

// const headers = {
//   'Content-Type': 'application/json',
//   Accept: 'application/json',
//   Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM5ODQ2MDdiNWE0NTAwMjFiNWY1MDEiLCJpYXQiOjE2ODE0OTEwNDB9.M9Mdl9O9jqyO1Nxy0Jaw0rXoa_k07fo_hE7-Rv3eKvY`,
// };
// export const getServerSideProps: GetServerSideProps = async () => {
//   const res = await fetch('https://coding-challenge-api.aerolab.co/products', {
//     headers,
//   });
//   const data = await res.json();
//   console.log(data);

//   return { props: { data } };
// };
