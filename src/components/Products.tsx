import { ProductSection } from '@/components/styled/Products.styled';
import React from 'react';
import ProductsHeader from '@/components/ProductsHeader';
import DisplayProducts from '@/components/DisplayProducts';
import { GetServerSideProps } from 'next';
import { ProductsType } from '../../types';

type Props = {
  data: ProductsType[];
};

const Products = ({ data }: Props) => {
  console.log(data);
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
