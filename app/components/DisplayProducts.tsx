'use client';
import { ProductsType } from '../../types';

import icon from '../../public/assets/icons/aeropay-3.svg';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { fetchData, getProducts } from '../utils/functions';
import Product from './Product';
import { useGlobalContext } from '../Context/store';
import { useState } from 'react';
import vector from '../../public/assets/icons/chevron-active.svg';

// type Props = {
//   data: ProductsType[];
// };

const DisplayProducts = () => {
  const { pageNumber, setPageNumber } = useGlobalContext();

  const { data } = useQuery({
    queryKey: ['products', pageNumber],
    queryFn: () => getProducts(),
  });

  const { order } = useGlobalContext();

  const highestPrice = () => {
    const sortedArray = [...data];
    sortedArray?.sort((a: ProductsType, b: ProductsType) => b.cost - a.cost);
    if (pageNumber === 1) {
      const page1 = sortedArray?.slice(0, 16);
      return page1?.map((p: ProductsType) => {
        return <Product key={p._id} p={p} />;
      });
    } else {
      const page2 = sortedArray?.slice(16, 32);
      return page2?.map((p: ProductsType) => {
        return <Product key={p._id} p={p} />;
      });
    }
  };
  const lowestPrice = () => {
    const sortedArray = [...data];
    sortedArray?.sort((a: ProductsType, b: ProductsType) => a.cost - b.cost);

    if (pageNumber === 1) {
      const page1 = sortedArray?.slice(0, 16);
      return page1?.map((p: ProductsType) => {
        return <Product key={p._id} p={p} />;
      });
    } else {
      const page2 = sortedArray?.slice(16, 32);
      return page2?.map((p: ProductsType) => {
        return <Product key={p._id} p={p} />;
      });
    }
  };

  const mostRecent = () => {
    if (pageNumber === 1) {
      const page1 = data?.slice(0, 16);
      return page1?.map((p: ProductsType) => {
        return <Product key={p._id} p={p} />;
      });
    } else {
      const page2 = data?.slice(16, 32);
      return page2?.map((p: ProductsType) => {
        return <Product key={p._id} p={p} />;
      });
    }
  };

  return (
    <div className="hidden xl:block">
      <div className="hidden xl:grid justify-center xl:grid-cols-4 xl:w-[1464px] m-auto mt-8 xl:mt-0">
        {order === 'Highest price' && highestPrice()}
        {order === 'Lowest price' && lowestPrice()}
        {order === 'Most recent' && mostRecent()}
      </div>

      <div className="xl:hidden flex justify-between items-center border-[1px] border-[#dae4f2] rounded-2xl px-4 py-3 w-[310px] mx-auto">
        <div
          className="p-2  bg-[#e6edf7] rounded-lg cursor-pointer"
          onClick={() => setPageNumber(1)}
        >
          <Image className="rotate-180" src={vector} alt="vector" />
        </div>
        <div className="flex font-medium">
          <p className="text-[#7c899c] text-lg mr-2">Page</p>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#176feb] to-[#ff80ff] text-lg">
            {pageNumber} of 2
          </p>
        </div>
        <div
          className="p-2  bg-[#e6edf7] rounded-lg cursor-pointer"
          onClick={() => setPageNumber(2)}
        >
          <Image src={vector} alt="vector" />
        </div>
      </div>
    </div>
  );
};

export default DisplayProducts;
