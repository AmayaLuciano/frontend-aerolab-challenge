import { useGlobalContext } from '@/app/Context/store';
import Image from 'next/image';
import React from 'react';
import vector from '../../../public/assets/icons/chevron-active.svg';

type Props = {};

const TPagination = (props: Props) => {
  const { MpageNumber, setMPageNumber, category, products, setProducts } =
    useGlobalContext();
  return (
    <>
      {category !== 'All Products' ? (
        <div className="xl:hidden hidden lg:flex justify-between items-center border-[1px] border-[#dae4f2] rounded-2xl px-4 py-3 w-[310px] mx-auto">
          <div className="p-2  bg-[#e6edf7] rounded-lg cursor-pointer">
            <Image className="rotate-180" src={vector} alt="vector" />
          </div>

          <div className="flex font-medium">
            <p className="text-[#7c899c] text-lg mr-2">Page</p>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#176feb] to-[#ff80ff] text-lg">
              {MpageNumber} of 1
            </p>
          </div>

          <div className="p-2  bg-[#e6edf7] rounded-lg cursor-pointer">
            <Image src={vector} alt="vector" />
          </div>
        </div>
      ) : (
        <>
          <div className="2xl:hidden hidden  lg:flex justify-between items-center border-[1px] border-[#dae4f2] rounded-2xl px-4 py-3 w-[310px] mx-auto">
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
                {MpageNumber} of 3
              </p>
            </div>
            {MpageNumber === 3 ? (
              <div className="hidden lg:block p-2  bg-[#f3f4f5] rounded-lg cursor-not-allowed">
                <Image src={vector} alt="vector" />
              </div>
            ) : (
              <div
                className="hidden lg:block p-2  bg-[#e6edf7] rounded-lg cursor-pointer"
                onClick={() => setMPageNumber(MpageNumber + 1)}
              >
                <Image src={vector} alt="vector" />
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default TPagination;
