'use client';
import ilustration from '../../public/assets/illustrations/hero-modified.png';
import Image from 'next/image';
import vector from '../../public/assets/icons/Icons.svg';
import wave from '../../public/assets/illustrations/single-wave-pattern.svg';
import Link from 'next/link';

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="lg:h-[800px] h-[550px] 2xl:mt-[-1350px] 2xl:h-[1000px] xl:max-w-full bg-[url('../../public/assets/illustrations/single-wave-pattern.svg')] bg-repeat lg:pb-80 2xl:pb-0">
      <div className="max-w-[1464px] flex mt-8 justify-center items-center text-center 2xl:flex-row 2xl:justify-between 2xl:mt-[1400px] mx-auto 2xl:pt-28">
        <div className="flex-col  2xl:items-start  2xl:gap-6  2xl:w-[602px] 2xl:h-[433px] h-full">
          <div className="flex-col text-center 2xl:items-start 2xl:gap-2 2xl:w-[602px] 2xl:text-left">
            <p className="uppercase text-[#7c899c] font-semibold text-lg tracking-wide ">
              explore the
            </p>
            <div className="uppercase flex-col ">
              <h2 className="text-[96px] mt-[-25px] 2xl:mt-[-70px] 2xl:w-[602px] 2xl:h-[302px] font-black 2xl:text-[200px] text-transparent bg-clip-text bg-gradient-to-r from-[#176feb] to-[#ff80ff]">
                tech
              </h2>
              <h2 className="mt-[-60px] 2xl:mt-[-130px] font-black 2xl:text-[200px] text-[96px] ">
                zone
              </h2>
            </div>
          </div>
          <div className="text-[#7c899c] w-[289px] mx-auto 2xl:ml-0 font-base 2xl:mt-[-50px] 2xl:w-[523px] 2xl:text-left">
            Here you’ll be able to exchange all of your hard-earned Aeropoints
            and exchange them for cool tech.
          </div>
          <Link href={'/#products'}>
            <div className="flex text-center  justify-center items-center w-[303px] mx-auto bg-gradient-to-r from-[#176feb] to-[#ff80ff] lg:rounded-full h-[80px] 2xl:mx-0 mt-14  cursor-pointer rounded-3xl ">
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

        <div className="relative w-[830px] mt-0 hidden 2xl:block">
          <div className=" w-[772px] absolute h-[600px]  mt-[-200px] hidden   2xl:block bg-gradient-to-r from-[rgba(23,111,235,0.5)] to-[rgba(255,128,255,0.5)] rounded-[104px] "></div>
          <Image
            className="absolute w-[930px] right-10 h-[800px] hidden 2xl:block bottom-[-400px]"
            width={930}
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
