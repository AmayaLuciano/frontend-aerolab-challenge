'use client';
import { ProductsType } from '../../../types';

import icon from '../../public/assets/icons/aeropay-3.svg';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../../utils/functions';
import Product from '../Product';
import { useGlobalContext } from '../../Context/store';
import { useState } from 'react';
import vector from '../../../public/assets/icons/chevron-active.svg';
import TPagination from './TPagination';
import LoadingProduct from '../LoadingProduct';

// type Props = {
//   data: ProductsType[];
// };

const TDisplayProducts = () => {
  const { MpageNumber, setMPageNumber, category, products, setProducts } =
    useGlobalContext();

  const { data, isLoading } = useQuery({
    queryKey: ['products', MpageNumber],
    queryFn: () => getProducts(),
  });

  const { order } = useGlobalContext();

  const MlowestPrice = () => {
    const sortedArray = structuredClone(data);
    sortedArray?.sort((a: ProductsType, b: ProductsType) => a.cost - b.cost);
    if (category !== 'All Products') {
      const filterArray = sortedArray?.filter(
        (p: ProductsType) => p.category === category
      );
      if (MpageNumber === 1) {
        const page1 = filterArray?.slice(0, 12);
        return page1?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      } else if (MpageNumber === 2) {
        const page2 = filterArray?.slice(12, 24);
        return page2?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      } else if (MpageNumber === 3) {
        const page3 = filterArray?.slice(24, 32);
        return page3?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      }
    }
    if (category === 'All Products') {
      if (MpageNumber === 1) {
        const page1 = sortedArray?.slice(0, 12);

        return page1?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      } else if (MpageNumber === 2) {
        const page2 = sortedArray?.slice(12, 24);
        return page2?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      } else if (MpageNumber === 3) {
        const page3 = sortedArray?.slice(24, 32);
        return page3?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      }
    }
  };

  const MmostRecent = () => {
    const sortedArray = structuredClone(data);
    if (category !== 'All Products') {
      const filterArray = sortedArray?.filter(
        (p: ProductsType) => p.category === category
      );

      if (MpageNumber === 1) {
        const page1 = filterArray?.slice(0, 12);
        return page1?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      } else if (MpageNumber === 2) {
        const page2 = filterArray?.slice(12, 24);
        return page2?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      } else if (MpageNumber === 3) {
        const page3 = filterArray?.slice(24, 32);
        return page3?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      }
    }
    if (category === 'All Products') {
      if (MpageNumber === 1) {
        const page1 = sortedArray?.slice(0, 12);

        return page1?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      } else if (MpageNumber === 2) {
        const page2 = sortedArray?.slice(12, 24);
        return page2?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      } else if (MpageNumber === 3) {
        const page3 = sortedArray?.slice(24, 32);
        return page3?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      }
    }
  };

  const MhighestPrice = () => {
    const sortedArray = structuredClone(data);
    sortedArray?.sort((a: ProductsType, b: ProductsType) => b.cost - a.cost);
    if (category === 'All Products') {
      if (MpageNumber === 1) {
        const page1 = sortedArray?.slice(0, 12);
        console.log(sortedArray);
        return page1?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      } else if (MpageNumber === 2) {
        const page2 = sortedArray?.slice(12, 24);
        return page2?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      } else if (MpageNumber === 3) {
        const page3 = sortedArray?.slice(24, 32);
        return page3?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      }
    }

    if (category !== 'All Products') {
      const filterArray = sortedArray?.filter(
        (p: ProductsType) => p.category === category
      );

      if (MpageNumber === 1) {
        const page1 = filterArray?.slice(0, 12);
        return page1?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      } else if (MpageNumber === 2) {
        const page2 = filterArray?.slice(12, 24);
        return page2?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      } else if (MpageNumber === 3) {
        const page3 = filterArray?.slice(24, 32);
        return page3?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      }
    }
  };

  const loader = Array.from({ length: 12 }, (_, index) => {
    return <LoadingProduct key={index} />;
  });
  return (
    <>
      <div className="hidden 2xl:hidden lg:grid lg:grid-cols-3 lg:justify-center lg:items-center max-w-[1024px] mx-auto mt-8  ">
        {category === 'All Products' && isLoading ? <>{loader}</> : null}

        {order === 'Highest price' && MhighestPrice()}
        {order === 'Most recent' && MmostRecent()}
        {order === 'Lowest price' && MlowestPrice()}
      </div>

      <TPagination />
      <div className="2xl:hidden hidden lg:flex justify-center mt-6 gap-2">
        {MpageNumber === 1 && (
          <p className="text-transparent font-medium bg-clip-text bg-gradient-to-r from-[#176feb] to-[#ff80ff] text-base">
            12 of 32{' '}
          </p>
        )}
        {MpageNumber === 2 && (
          <p className="text-transparent font-medium bg-clip-text bg-gradient-to-r from-[#176feb] to-[#ff80ff] text-base">
            24 of 32{' '}
          </p>
        )}
        {MpageNumber === 3 && (
          <p className="text-transparent font-medium bg-clip-text bg-gradient-to-r from-[#176feb] to-[#ff80ff] text-base">
            32 of 32{' '}
          </p>
        )}
        {MpageNumber === 4 && (
          <p className="text-transparent font-medium bg-clip-text bg-gradient-to-r from-[#176feb] to-[#ff80ff] text-base">
            32 of 32{' '}
          </p>
        )}

        <p className="text-[#7c899c] text-base"> products </p>
      </div>
    </>
  );
};

export default TDisplayProducts;
