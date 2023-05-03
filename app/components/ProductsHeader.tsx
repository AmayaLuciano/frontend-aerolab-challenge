'use client';
import vector from '../../public/assets/icons/chevron-active.svg';
import Image from 'next/image';
import { useGlobalContext } from '../Context/store';
import { useState } from 'react';
import TPagination from './Mobile/TPagination';
import TProductsHeader from './Mobile/TProductsHeader';

type Props = {};

const ProductsHeader = (props: Props) => {
  const {
    order,
    setOrder,
    setPageNumber,
    pageNumber,
    category,
    setCategory,
    setMPageNumber,
  } = useGlobalContext();

  const [display, setDisplay] = useState(false);

  return (
    <>
      <div className="2xl:hidden">
        <TProductsHeader />
      </div>

      <div className="hidden 2xl:block">
        <div className="flex flex-row h-[142px] uppercase font-black text-5xl mt-72 items-center">
          <h2 className="text-transparent   bg-clip-text bg-gradient-to-r from-[#176feb] to-[#ff80ff] mr-4">
            tech
          </h2>
          <h2 className="text-[#252f3d]"> products</h2>
        </div>

        <div className="flex mb-14">
          <div className="flex  items-center mr-4 ">
            <p className="w-[81px] h-[27px] text-lg text-[#7c899c] font-light">
              Filter by:
            </p>
            <button
              onClick={() => setDisplay(!display)}
              className="flex justify-between items-center w-[335px] mt-8 2xl:mt-0 2xl:w-[256px] border-[1px] border-[#dae4f2] rounded-2xl p-4"
            >
              <p className="text-[#7c899c]">{category}</p>
              {display ? (
                <svg
                  className="transition-transform"
                  width="15px"
                  height="15px"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                  fill="yes"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#000000"
                >
                  <path
                    d="M3.685 18.783l7.88-14.008a.5.5 0 01.87 0l7.88 14.008a.5.5 0 01-.617.71l-7.517-2.922a.5.5 0 00-.362 0l-7.517 2.923a.5.5 0 01-.617-.711z"
                    stroke="#000000"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="rotate-180 transition-transform"
                  width="15px"
                  height="15px"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                  fill="yes"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#000000"
                >
                  <path
                    d="M3.685 18.783l7.88-14.008a.5.5 0 01.87 0l7.88 14.008a.5.5 0 01-.617.71l-7.517-2.922a.5.5 0 00-.362 0l-7.517 2.923a.5.5 0 01-.617-.711z"
                    stroke="#000000"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              )}
            </button>
            {display && (
              <div className="absolute flex-col top-[2160px] ml-2  bg-white w-[330px] rounded-2xl  border-[1px] border-[#dae4f2] z-10">
                <p
                  onClick={() => {
                    setCategory('All Products'),
                      setDisplay(false),
                      setMPageNumber(1);
                    setPageNumber(1);
                  }}
                  className="p-4 text-[#7C899C] hover:bg-[#F5F9FF] rounded-t-2xl"
                >
                  All products
                </p>
                <p
                  onClick={() => {
                    setCategory('Audio'), setDisplay(false), setMPageNumber(1);
                    setPageNumber(1);
                  }}
                  className="p-4 text-[#7C899C] hover:bg-[#F5F9FF]"
                >
                  Audio
                </p>
                <p
                  onClick={() => {
                    setCategory('Cameras'),
                      setDisplay(false),
                      setMPageNumber(1);
                    setPageNumber(1);
                  }}
                  className="p-4 text-[#7C899C] hover:bg-[#F5F9FF]"
                >
                  Cameras
                </p>
                <p
                  onClick={() => {
                    setCategory('Drones'), setDisplay(false), setMPageNumber(1);
                    setPageNumber(1);
                  }}
                  className="p-4 text-[#7C899C] hover:bg-[#F5F9FF]"
                >
                  Drones
                </p>
                <p
                  onClick={() => {
                    setCategory('Gaming'), setDisplay(false), setMPageNumber(1);
                    setPageNumber(1);
                  }}
                  className="p-4 text-[#7C899C] hover:bg-[#F5F9FF]  rounded-b-2xl"
                >
                  Gaming
                </p>

                <p
                  onClick={() => {
                    setCategory('Laptops'),
                      setDisplay(false),
                      setMPageNumber(1);
                    setPageNumber(1);
                  }}
                  className="p-4 text-[#7C899C] hover:bg-[#F5F9FF]  rounded-b-2xl"
                >
                  Laptops
                </p>
                <p
                  onClick={() => {
                    setCategory('Monitors & TV'),
                      setDisplay(false),
                      setMPageNumber(1);
                    setPageNumber(1);
                  }}
                  className="p-4 text-[#7C899C] hover:bg-[#F5F9FF]  rounded-b-2xl"
                >
                  Monitors & TV
                </p>
                <p
                  onClick={() => {
                    setCategory('Phone Accessories'),
                      setDisplay(false),
                      setMPageNumber(1);
                    setPageNumber(1);
                  }}
                  className="p-4 text-[#7C899C] hover:bg-[#F5F9FF]  rounded-b-2xl"
                >
                  Phone Accessories
                </p>
                <p
                  onClick={() => {
                    setCategory('Phones'), setDisplay(false), setMPageNumber(1);
                    setPageNumber(1);
                  }}
                  className="p-4 text-[#7C899C] hover:bg-[#F5F9FF]  rounded-b-2xl"
                >
                  Phones
                </p>
                <p
                  onClick={() => {
                    setCategory('Smart Home'),
                      setDisplay(false),
                      setMPageNumber(1);
                    setPageNumber(1);
                  }}
                  className="p-4 text-[#7C899C] hover:bg-[#F5F9FF]  rounded-b-2xl"
                >
                  Smart Home
                </p>
                <p
                  onClick={() => {
                    setCategory('Tablets & E-readers'),
                      setDisplay(false),
                      setMPageNumber(1);
                    setPageNumber(1);
                  }}
                  className="p-4 text-[#7C899C] hover:bg-[#F5F9FF]  rounded-b-2xl"
                >
                  Tablets & E-readers
                </p>
              </div>
            )}
            <div className="hidden lg:flex  mt-8 2xl:hidden">
              <TPagination />
            </div>
          </div>

          <div className="flex ml-10 pl-10 border-l-2">
            <div className="flex items-center  gap-4 ">
              <p className=" w-[71px] text-[#7c899c] font-light text-lg">
                Sort by:
              </p>
              <div className="flex items-center">
                <div className="flex justify-center items-center  h-10 mr-2">
                  <button
                    onClick={() => setOrder('Most recent')}
                    className={`${
                      order === 'Most recent'
                        ? 'bg-gradient-to-r from-[#176feb] to-[#ff80ff] text-white'
                        : 'bg-[#E5F0FF] '
                    }  px-6 py-2 rounded-xl text-lg w-[170px] `}
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
                </div>
                <div className="flex justify-center items-center h-10 mr-2">
                  <button
                    onClick={() => setOrder('Lowest price')}
                    className={`${
                      order === 'Lowest price'
                        ? 'bg-gradient-to-r from-[#176feb] to-[#ff80ff] text-white'
                        : 'bg-[#E5F0FF] '
                    }  px-6 py-2 rounded-xl text-lg w-[170px]`}
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
                </div>
                <div className="flex justify-center items-center h-10 mr-2">
                  <button
                    onClick={() => setOrder('Highest price')}
                    className={`${
                      order === 'Highest price'
                        ? 'bg-gradient-to-r from-[#176feb] to-[#ff80ff] text-white'
                        : 'bg-[#E5F0FF] '
                    }  px-6 py-2 rounded-xl text-lg w-[170px]`}
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
          </div>
          {category === 'All Products' && (
            <div className="flex justify-between mr-0 ml-auto items-center border-[1px] border-[#dae4f2] rounded-2xl px-4 py-3 w-[250px]">
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
          )}
        </div>
      </div>
    </>
  );
};

export default ProductsHeader;
