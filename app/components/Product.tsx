import { ProductsType } from '@/types';
import Image from 'next/image';
import React from 'react';
import icon from '../../public/assets/icons/aeropay-3.svg';
import { fetchData, redeemProduct } from '../utils/functions';
import { useQuery } from '@tanstack/react-query';

type Props = {
  p: ProductsType;
};

const Product = ({ p }: Props) => {
  const { refetch, data: user } = useQuery({
    queryKey: ['user'],
    queryFn: fetchData,
  });

  const redeem = async (id: string) => {
    await redeemProduct(id);
    refetch();
  };
  return (
    <div
      className="flex-col justify-center items-center mb-[80px] w-[348px] h-[506px]"
      key={p._id}
    >
      <div className="h-[431px] ">
        <div className="box-border flex items-center justify-center w-[348px] h-[345px] bg-white border-[1px] border-[#dae4f2] rounded-t-2xl">
          <Image src={p.img.url} width={300} height={300} alt="product" />
        </div>
        <div className="box-border flex-col border-[1px] border-[#dae4f2] rounded-b-2xl border-t-0 h-[88px] bg-white pl-4 pt-4">
          <p className="text-[#252f3d] text-lg font-medium">{p.name}</p>
          <p className="text-sm text-[#7c899c] uppercase">{p.category}</p>
        </div>
      </div>

      {user?.points < p.cost ? (
        <div className="flex p-4 justify-center items-center rounded-2xl mt-4 gap-2 bg-[#E6EDF7] cursor-not-allowed">
          <p className="text-[#7C899C] font-medium text-lg">You need</p>
          <div className="flex justify-center items-center gap-2 leading-7">
            <Image className="" width={24} height={24} src={icon} alt="icon" />
            <p className="text-lg text-[#7C899C] font-medium">
              {p.cost - user?.points}
            </p>
          </div>
        </div>
      ) : (
        <div
          onClick={() => redeem(p._id)}
          className="flex p-4 justify-center items-center rounded-2xl mt-4 gap-2 bg-gradient-to-r from-[#176feb] to-[#ff80ff] cursor-pointer"
        >
          <p className="text-white text-lg font-medium">Redeem for</p>
          <div className="flex justify-center items-center gap-2 leading-7">
            <Image className="" width={24} height={24} src={icon} alt="icon" />
            <p className="text-lg text-white font-medium">{p.cost}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
