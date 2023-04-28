'use client';
import ilustration from '../../public/assets/illustrations/hero-desktop.png';
import Image from 'next/image';
import vector from '../../public/assets/icons/Icons.svg';
import wave from '../../public/assets/illustrations/single-wave-pattern.svg';
import Link from 'next/link';

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="overflow-hidden flex-col mt-8 justify-center items-center text-center xl:flex-row xl:justify-between xl:mx-[141px] xl:mt-[112px] lg:h-[800px]">
      <div className="bg-[url('../../public/assets/illustrations/single-wave-pattern.svg')] h-full bg-repeat w-full">
        <div className="flex-col xl:items-start  xl:gap-6 xl:ml-[87px] xl:w-[602px] xl:h-[433px]">
          <div className="flex-col text-center xl:items-start xl:gap-2 xl:w-[602px] xl:h-[355]">
            <p className="uppercase text-[#7c899c] font-semibold text-lg tracking-wide ">
              explore the
            </p>
            <div className="uppercase flex-col ">
              <h2 className="text-[96px] mt-[-25px] xl:mt-[-70px] xl:w-[602px] xl:h-[302px] font-black xl:text-[200px] text-transparent bg-clip-text bg-gradient-to-r from-[#176feb] to-[#ff80ff]">
                tech
              </h2>
              <h2 className="mt-[-60px] xl:mt-[-130px] font-black xl:text-[200px] text-[96px] ">
                zone
              </h2>
            </div>
          </div>
          <div className="text-[#7c899c] lg:w-[289px] lg:mx-auto mx-6 font-base xl:mt-[-50px] xl:w-[523px]">
            Here you’ll be able to exchange all of your hard-earned Aeropoints
            and exchange them for cool tech.
          </div>
          <Link href={'/#products'}>
            <div className="flex text-center  justify-center items-center lg:w-[303px] lg:mx-auto bg-gradient-to-r from-[#176feb] to-[#ff80ff] rounded-full h-[80px] mx-9 mt-14  cursor-pointer">
              <p className="font-medium uppercase text-white ">
                view all products
              </p>
              <Image
                className="ml-2"
                width={30}
                height={30}
                src={vector}
                alt="vector"
              />
            </div>
          </Link>
        </div>

        <div className="  xl:w-[897px] xl:h-[795px] mt-32 xl:mt-0   hidden xl:block">
          <div className="hidden xl:w-[772px] xl:h-[600px] bg-gradient-to-r from-[rgba(23,111,235,0.5)] to-[rgba(255,128,255,0.5)] rounded-[104px] xl:ml-10" />
          <Image
            className="xl:absolute xl:right-[220px] xl:top-[10px]  hidden xl:block"
            width={830}
            height={790}
            src={ilustration}
            alt="ilustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
