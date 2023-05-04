import React from 'react';
import icon from '../../public/assets/icons/aeropay-2.svg';
import Image from 'next/image';

type Props = {};

const LoadingProduct = (props: Props) => {
  return (
    <div className="flex-col justify-center items-center mb-[80px] lg:w-[311px] 2xl:w-[348px] 2xl:h-[506px] mx-auto">
      <div className="h-[431px] ">
        <div className="box-border flex items-center justify-center lg:w-[311px] 2xl:w-[348px] h-[345px] bg-white border-[1px] border-[#dae4f2] rounded-t-2xl">
          <Image src={icon} width={300} height={300} alt="product" />
        </div>
        <div className="box-border flex-col border-[1px] border-[#dae4f2] rounded-b-2xl border-t-0 h-[88px] bg-white pl-4 pt-4">
          <p className="text-[#252f3d] text-lg font-medium">Loading...</p>
          <p className="text-sm text-[#7c899c] uppercase">Loading...</p>
        </div>
      </div>

      <div className="flex p-4 justify-center items-center rounded-2xl mt-4 gap-2 bg-gradient-to-r from-[#176feb] to-[#ff80ff] cursor-pointer">
        <p className="text-white text-lg font-medium">Redeem for</p>
        <div className="flex justify-center items-center gap-2 leading-7">
          <Image className="" width={24} height={24} src={icon} alt="icon" />
          <p className="text-lg text-white font-medium">Loading...</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingProduct;
