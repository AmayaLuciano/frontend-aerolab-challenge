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
  const { pageNumber, setPageNumber, category, products, setProducts } =
    useGlobalContext();

  const { data } = useQuery({
    queryKey: ['products', pageNumber],
    queryFn: () => getProducts(),
  });

  const { order } = useGlobalContext();

  const highestPrice = () => {
    const sortedArray = structuredClone(data);
    sortedArray?.sort((a: ProductsType, b: ProductsType) => b.cost - a.cost);
    if (category === 'All Products') {
      if (pageNumber === 1) {
        const page1 = sortedArray?.slice(0, 12);
        console.log(sortedArray);
        return page1?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      } else if (pageNumber === 2) {
        const page2 = sortedArray?.slice(12, 24);
        return page2?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      }
    }

    if (category !== 'All Products') {
      const filterArray = sortedArray?.filter(
        (p: ProductsType) => p.category === category
      );

      if (pageNumber === 1) {
        const page1 = filterArray?.slice(0, 12);
        return page1?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      } else if (pageNumber === 2) {
        const page2 = filterArray?.slice(12, 24);
        return page2?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      }
    }
  };

  const lowestPrice = () => {
    const sortedArray = structuredClone(data);
    sortedArray?.sort((a: ProductsType, b: ProductsType) => a.cost - b.cost);
    if (category !== 'All Products') {
      const filterArray = sortedArray?.filter(
        (p: ProductsType) => p.category === category
      );
      if (pageNumber === 1) {
        const page1 = filterArray?.slice(0, 16);
        return page1?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      } else if (pageNumber === 2) {
        const page2 = filterArray?.slice(16, 32);
        return page2?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      }
    }
    if (category === 'All Products') {
      if (pageNumber === 1) {
        const page1 = sortedArray?.slice(0, 16);

        return page1?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      } else if (pageNumber === 2) {
        const page2 = sortedArray?.slice(16, 32);
        return page2?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      }
    }
  };

  const mostRecent = () => {
    const sortedArray = structuredClone(data);
    if (category !== 'All Products') {
      const filterArray = sortedArray?.filter(
        (p: ProductsType) => p.category === category
      );

      if (pageNumber === 1) {
        const page1 = filterArray?.slice(0, 12);
        return page1?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      } else if (pageNumber === 2) {
        const page2 = filterArray?.slice(12, 24);
        return page2?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      } else if (pageNumber === 3) {
        const page3 = filterArray?.slice(24, 32);
        return page3?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      }
    }
    if (category === 'All Products') {
      if (pageNumber === 1) {
        const page1 = sortedArray?.slice(0, 16);

        return page1?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      } else if (pageNumber === 2) {
        const page2 = sortedArray?.slice(16, 32);
        return page2?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      }
    }
  };

  return (
    <div className="hidden 2xl:block">
      <div className="hidden 2xl:grid justify-center xl:grid-cols-4 xl:w-[1464px] m-auto mt-8 xl:mt-0">
        {order === 'Highest price' && highestPrice()}
        {order === 'Lowest price' && lowestPrice()}
        {order === 'Most recent' && mostRecent()}
      </div>

      {category === 'All Products' && (
        <>
          <div className="flex justify-between items-center border-[1px] border-[#dae4f2] rounded-2xl px-4 py-3 w-[310px] mx-auto">
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

          <div className="hidden 2xl:flex justify-center mt-6 gap-2">
            {pageNumber === 1 && (
              <p className="text-transparent font-medium bg-clip-text bg-gradient-to-r from-[#176feb] to-[#ff80ff] text-base">
                16 of 32{' '}
              </p>
            )}
            {pageNumber === 2 && (
              <p className="text-transparent font-medium bg-clip-text bg-gradient-to-r from-[#176feb] to-[#ff80ff] text-base">
                32 of 32{' '}
              </p>
            )}

            <p className="text-[#7c899c] text-base"> products </p>
          </div>
        </>
      )}
    </div>
  );
};

export default DisplayProducts;
