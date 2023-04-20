'use client';
import ilustration from '../../public/assets/illustrations/hero-desktop.png';
import Image from 'next/image';
import vector from '../../public/assets/icons/Icons.svg';

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="flex justify-between mx-[141px] mt-[112px]">
      <div className="flex-col items-start gap-6 ml-[87px] w-[602px] h-[433px]">
        <div className="flex-col items-start gap-2 w-[602px] h-[355]">
          <p className="uppercase text-[#7c899c] font-semibold text-lg tracking-wide ">
            explore the
          </p>
          <div className="uppercase">
            <h2 className="mt-[-70px] w-[602px] h-[302px] font-black text-[200px] text-transparent bg-clip-text bg-gradient-to-r from-[#176feb] to-[#ff80ff]">
              tech
            </h2>
            <h2 className="mt-[-130px] font-black text-[200px]">zone</h2>
          </div>
        </div>
        <div className="text-[#7c899c] font-medium mt-[-50px] w-[523px]">
          Here you’ll be able to exchange all of your hard-earned Aeropoints and
          exchange them for cool tech.
        </div>
        <div className="flex justify-center items-center bg-gradient-to-r from-[#176feb] to-[#ff80ff] rounded-3xl h-[80px] mt-14 w-[318px] cursor-pointer">
          <p className="font-medium uppercase text-white ">view all products</p>
          <Image
            className="ml-2"
            width={30}
            height={30}
            src={vector}
            alt="vector"
          />
        </div>
      </div>

      <div className="w-[897px] h-[795px]">
        <div className="w-[772px] h-[600px] bg-gradient-to-r from-[rgba(23,111,235,0.5)] to-[rgba(255,128,255,0.5)] rounded-[104px] ml-10" />
        <Image
          className="absolute right-[220px] top-[10px] "
          width={830}
          height={790}
          src={ilustration}
          alt="ilustration"
        />
      </div>
    </div>
  );
};

export default Hero;
