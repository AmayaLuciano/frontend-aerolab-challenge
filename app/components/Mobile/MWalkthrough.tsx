import card1 from '../../../public/assets/illustrations/walkthroug-1-responsive.png';
import card2 from '../../../public/assets/illustrations/walkthroug-2-responsive.png';
import card3 from '../../../public/assets/illustrations/walkthroug-3-responsive.png';
import ilustration from '../../../public/assets/illustrations/hero-responsive.png';

import icon1 from '../../../public/assets/icons/walkthrough-1.svg';
import icon2 from '../../../public/assets/icons/walkthrough-2.svg';
import icon3 from '../../../public/assets/icons/walkthrough-3.svg';
import Image from 'next/image';

type Props = {};

const MWalkthrough = (props: Props) => {
  return (
    <div className="overflow-hidden sm:hidden flex-col h-[1809px] bg-gradient-to-r from-[rgba(23,111,235,0.5)] to-[rgba(255,128,255,0.5)] z-0 ">
      <div className="relative w-full  z-30 bg-black">
        <Image
          className=" absolute left-0 scale-150 bottom-96 top-[-20px]  overflow-y-visible"
          width={480}
          height={280}
          src={ilustration}
          alt="ilustration"
        />
      </div>

      <div className="mt-[500px]  p-3 rounded-[32px] w-[335px] h-[408px]  bg-white/60 z-20 mx-auto">
        <div className="overflow-hidden w-[311px] h-[243px] bg-gradient-to-r from-[#7296eb] to-[#eac0e9] rounded-t-3xl">
          <Image className="mt-[-30px]" src={card1} alt="card" />
        </div>
        <div className="flex-col justify-center items-start border-[1px] border-[#dae4f2] rounded-b-[32px] px-6 bg-white w-[311px] h-[140px]">
          <div className="flex justify-start items-center mt-4 ">
            <Image
              className="flex items-start p-1 bg-[#e5f0ff] rounded-lg mr-5"
              width={40}
              height={40}
              src={icon1}
              alt="icon"
            />
            <p className="  text-transparent bg-clip-text bg-gradient-to-r from-[#176feb] to-[#ff80ff] font-black uppercase text-2xl">
              1—browse
            </p>
          </div>
          <p className=" mt-3 text-[#7c899c] font-medium text-base ">
            Browse our tech catalog with more than 20 top tech products
          </p>
        </div>
      </div>

      <div className="mx-auto mt-8 p-3 rounded-[32px] w-[335px] h-[408px]  bg-white/60">
        <div className="overflow-hidden w-[311px] h-[243px] bg-gradient-to-r from-[#7296eb] to-[#eac0e9] rounded-t-3xl">
          <Image className="mt-[-30px]" src={card2} alt="card" />
        </div>
        <div className="flex-col justify-center items-start border-[1px] border-[#dae4f2] rounded-b-[32px] px-6 bg-white w-[311px] h-[140px]">
          <div className="flex justify-start items-center mt-4 ">
            <Image
              className="flex items-start p-1 bg-[#e5f0ff] rounded-lg mr-5"
              width={40}
              height={40}
              src={icon2}
              alt="icon"
            />
            <p className="  text-transparent bg-clip-text bg-gradient-to-r from-[#176feb] to-[#ff80ff] font-black uppercase text-2xl">
              2—choose
            </p>
          </div>
          <p className=" mt-3 text-[#7c899c] font-medium text-base ">
            Exchange your hard earned AeroPoints for the item
          </p>
        </div>
      </div>

      <div className="mx-auto mt-8 p-3 rounded-[32px] w-[335px] h-[408px]  bg-white/60">
        <div className="overflow-hidden w-[311px] h-[243px] bg-gradient-to-r from-[#7296eb] to-[#eac0e9] rounded-t-3xl">
          <Image className="mt-[-30px]" src={card3} alt="card" />
        </div>
        <div className="flex-col justify-center items-start border-[1px] border-[#dae4f2] rounded-b-[32px] px-6 bg-white w-[311px] h-[140px]">
          <div className="flex justify-start items-center mt-4 ">
            <Image
              className="flex items-start p-1 bg-[#e5f0ff] rounded-lg mr-5"
              width={40}
              height={40}
              src={icon3}
              alt="icon"
            />
            <p className="  text-transparent bg-clip-text bg-gradient-to-r from-[#176feb] to-[#ff80ff] font-black uppercase text-2xl">
              3—enjoy!
            </p>
          </div>
          <p className=" mt-3 text-[#7c899c] font-medium text-base ">
            All done We’ll take care of delivery of your tech item!
          </p>
        </div>
      </div>
    </div>
  );
};

export default MWalkthrough;
