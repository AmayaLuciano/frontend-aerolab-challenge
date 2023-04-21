import { ProductsType } from '../../types';

import icon from '../../public/assets/icons/aeropay-3.svg';
import Image from 'next/image';

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

  return (
    <>
      <div className="grid grid-cols-4 w-[1464px] m-auto">
        {data.map((p) => {
          return (
            <div
              className="flex-col justify-center items-center mb-[80px] w-[348px] h-[506px]"
              key={p._id}
            >
              <div className="h-[431px] ">
                <div className="box-border flex items-center justify-center w-[348px] h-[345px] bg-white border-[1px] border-[#dae4f2] rounded-t-2xl">
                  <Image
                    src={p.img.url}
                    width={300}
                    height={300}
                    alt="product"
                  />
                </div>
                <div className="box-border flex-col border-[1px] border-[#dae4f2] rounded-b-2xl border-t-0 h-[88px] bg-white pl-4 pt-4">
                  <p className="text-[#252f3d] text-lg font-medium">{p.name}</p>
                  <p className="text-sm text-[#7c899c] uppercase">
                    {p.category}
                  </p>
                </div>
              </div>

              <div className="flex p-4 justify-center items-center rounded-2xl mt-4 gap-2 bg-gradient-to-r from-[#176feb] to-[#ff80ff] cursor-pointer">
                <p className="text-white text-lg">Redeem for</p>
                <div className="flex justify-center items-center gap-2 leading-7">
                  <Image
                    className=""
                    width={24}
                    height={24}
                    src={icon}
                    alt="icon"
                  />
                  <p className="text-lg text-white">{p.cost}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DisplayProducts;
