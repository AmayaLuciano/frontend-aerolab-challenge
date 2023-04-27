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

// type Props = {
//   data: ProductsType[];
// };

const MDisplayProducts = () => {
  const { MpageNumber, setMPageNumber, category } = useGlobalContext();

  const { data } = useQuery({
    queryKey: ['products', MpageNumber],
    queryFn: () => getProducts(),
  });

  const { order } = useGlobalContext();

  const MlowestPrice = () => {
    const sortedArray = structuredClone(data);
    sortedArray?.sort((a: ProductsType, b: ProductsType) => a.cost - b.cost);
    if (category !== 'All products') {
      sortedArray?.filter((p: ProductsType) => p.category === category);

      if (MpageNumber === 1) {
        const page1 = sortedArray?.slice(0, 8);
        return page1?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      } else if (MpageNumber === 2) {
        const page2 = sortedArray?.slice(8, 16);
        return page2?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      } else if (MpageNumber === 3) {
        const page3 = sortedArray?.slice(16, 24);
        return page3?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      } else if (MpageNumber === 4) {
        const page4 = sortedArray?.slice(24, 32);
        return page4?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      }
    }
  };

  const MmostRecent = () => {
    const sortedArray = structuredClone(data);
    if (category !== 'All Products') {
      if (MpageNumber === 1) {
        const page1 = sortedArray?.slice(0, 8);
        return page1?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      } else if (MpageNumber === 2) {
        const page2 = sortedArray?.slice(8, 16);
        return page2?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      } else if (MpageNumber === 3) {
        const page2 = sortedArray?.slice(16, 24);
        return page2?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      } else if (MpageNumber === 4) {
        const page2 = sortedArray?.slice(24, 32);
        return page2?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      }
    }
    if (category === 'All Products') {
      if (MpageNumber === 1) {
        const page1 = sortedArray?.slice(0, 8);

        return page1?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      } else if (MpageNumber === 2) {
        const page2 = sortedArray?.slice(8, 16);
        return page2?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      } else if (MpageNumber === 3) {
        const page3 = sortedArray?.slice(16, 24);
        return page3?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      } else if (MpageNumber === 4) {
        const page4 = sortedArray?.slice(24, 32);
        return page4?.map((p: ProductsType) => {
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
        const page1 = sortedArray?.slice(0, 8);
        console.log(sortedArray);
        return page1?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      } else if (MpageNumber === 2) {
        const page2 = sortedArray?.slice(8, 16);
        return page2?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      } else if (MpageNumber === 3) {
        const page3 = sortedArray?.slice(16, 24);
        return page3?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      } else if (MpageNumber === 4) {
        const page4 = sortedArray?.slice(24, 32);
        return page4?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      }
    }

    if (category !== 'All Products') {
      const filterArray = sortedArray?.filter(
        (p: ProductsType) => p.category === category
      );

      if (MpageNumber === 1) {
        const page1 = filterArray?.slice(0, 8);
        return page1?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      } else if (MpageNumber === 2) {
        const page2 = filterArray?.slice(8, 16);
        return page2?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      } else if (MpageNumber === 3) {
        const page3 = filterArray?.slice(16, 24);
        return page3?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      } else if (MpageNumber === 4) {
        const page4 = filterArray?.slice(24, 32);
        return page4?.map((p: ProductsType) => {
          return <Product key={p._id} p={p} />;
        });
      }
    }
  };
  return (
    <>
      <div className="xl:hidden grid justify-center m-auto mt-8 ">
        {order === 'Highest price' && MhighestPrice()}
        {order === 'Most recent' && MmostRecent()}
        {order === 'Lowest price' && MlowestPrice()}
      </div>

      <div className="xl:hidden flex justify-between items-center border-[1px] border-[#dae4f2] rounded-2xl px-4 py-3 w-[310px] mx-auto">
        {MpageNumber === 1 ? (
          <div className="p-2  bg-[#f3f4f5] rounded-lg cursor-not-allowed">
            <Image className="rotate-180" src={vector} alt="vector" />
          </div>
        ) : (
          <div
            className="p-2  bg-[#e6edf7] rounded-lg cursor-pointer"
            onClick={() => setMPageNumber(MpageNumber - 1)}
          >
            <Image className="rotate-180" src={vector} alt="vector" />
          </div>
        )}

        <div className="flex font-medium">
          <p className="text-[#7c899c] text-lg mr-2">Page</p>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#176feb] to-[#ff80ff] text-lg">
            {MpageNumber} of 4
          </p>
        </div>
        {MpageNumber === 4 ? (
          <div className="p-2  bg-[#f3f4f5] rounded-lg cursor-not-allowed">
            <Image src={vector} alt="vector" />
          </div>
        ) : (
          <div
            className="p-2  bg-[#e6edf7] rounded-lg cursor-pointer"
            onClick={() => setMPageNumber(MpageNumber + 1)}
          >
            <Image src={vector} alt="vector" />
          </div>
        )}
      </div>
      <div className="xl:hidden flex justify-center mt-6 gap-2">
        {MpageNumber === 1 && (
          <p className="text-transparent font-medium bg-clip-text bg-gradient-to-r from-[#176feb] to-[#ff80ff] text-base">
            8 of 32{' '}
          </p>
        )}
        {MpageNumber === 2 && (
          <p className="text-transparent font-medium bg-clip-text bg-gradient-to-r from-[#176feb] to-[#ff80ff] text-base">
            16 of 32{' '}
          </p>
        )}
        {MpageNumber === 3 && (
          <p className="text-transparent font-medium bg-clip-text bg-gradient-to-r from-[#176feb] to-[#ff80ff] text-base">
            24 of 32{' '}
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

export default MDisplayProducts;
