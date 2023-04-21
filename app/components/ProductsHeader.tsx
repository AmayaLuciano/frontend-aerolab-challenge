'use client';
import vector from '../../public/assets/icons/chevron-active.svg';
import Image from 'next/image';
import { useGlobalContext } from '../Context/store';

type Props = {};

const ProductsHeader = (props: Props) => {
  const { order, setOrder } = useGlobalContext();

  return (
    <>
      <div className="flex items-start mx-[228px] h-[142px] uppercase font-black text-5xl">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#176feb] to-[#ff80ff] mr-4">
          tech
        </h2>
        <h2 className="text-[#252f3d]"> products</h2>
      </div>
      <div className="flex items-start mx-[228px] h-[142px]">
        <div className="flex justify-between items-center w-[1464px]">
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center gap-4">
              <p className="w-[81px] h-[27px] text-lg text-[#7c899c] font-light">
                Filter by:
              </p>
              <button className="flex justify-between items-center w-[256px] border-[1px] border-[#dae4f2] rounded-2xl p-4">
                <p className="text-[#7c899c]">All Products</p>
                🔽
              </button>
            </div>
            <div className="flex justify-center items-center gap-4 w-[646px] ">
              <p className="w-[71px] text-[#7c899c] font-light text-lg">
                Sort by:
              </p>
              <button
                onClick={() => setOrder('Most recent')}
                className={`${
                  order === 'Most recent'
                    ? 'bg-gradient-to-r from-[#176feb] to-[#ff80ff] text-white'
                    : 'bg-[#E5F0FF] '
                }  px-6 py-2 rounded-xl text-lg `}
              >
                <p
                  className={`${
                    order === 'Most recent'
                      ? 'text white'
                      : 'text-transparent bg-clip-text bg-gradient-to-r from-[#176feb] to-[#ff80ff]'
                  } `}
                >
                  Most recent
                </p>
              </button>
              <button
                onClick={() => setOrder('Lowest price')}
                className={`${
                  order === 'Lowest price'
                    ? 'bg-gradient-to-r from-[#176feb] to-[#ff80ff] text-white'
                    : 'bg-[#E5F0FF] '
                }  px-6 py-2 rounded-xl text-lg `}
              >
                <p
                  className={`${
                    order === 'Lowest price'
                      ? 'text white'
                      : 'text-transparent bg-clip-text bg-gradient-to-r from-[#176feb] to-[#ff80ff]'
                  } `}
                >
                  Lowest Price
                </p>
              </button>
              <button
                onClick={() => setOrder('Highest price')}
                className={`${
                  order === 'Highest price'
                    ? 'bg-gradient-to-r from-[#176feb] to-[#ff80ff] text-white'
                    : 'bg-[#E5F0FF] '
                }  px-6 py-2 rounded-xl text-lg `}
              >
                <p
                  className={`${
                    order === 'Highest price'
                      ? 'text white'
                      : 'text-transparent bg-clip-text bg-gradient-to-r from-[#176feb] to-[#ff80ff]'
                  } `}
                >
                  Highest Price
                </p>
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center border-[1px] border-[#dae4f2] rounded-2xl px-4 py-3 w-[310px]">
          <div className="p-2  bg-[#e6edf7] rounded-lg">
            <Image className="rotate-180" src={vector} alt="vector" />
          </div>
          <div className="flex font-medium">
            <p className="text-[#7c899c] text-lg mr-2">Page</p>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#176feb] to-[#ff80ff] text-lg">
              1 of 2
            </p>
          </div>
          <div className="p-2  bg-[#e6edf7] rounded-lg">
            <Image src={vector} alt="vector" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsHeader;
