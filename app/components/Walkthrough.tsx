import card1 from '../../public/assets/illustrations/walkthroug-1-desktop.png';
import card2 from '../../public/assets/illustrations/walkthroug-2-desktop.png';
import card3 from '../../public/assets/illustrations/walkthroug-3-desktop.png';
import icon1 from '../../public/assets/icons/walkthrough-1.svg';
import icon2 from '../../public/assets/icons/walkthrough-2.svg';
import icon3 from '../../public/assets/icons/walkthrough-3.svg';
import Image from 'next/image';
import MWalkthrough from './Mobile/MWalkthrough';
import TWalkthrough from './Mobile/TWalkthrough';

type Props = {};

const Walkthrough = (props: Props) => {
  return (
    <>
      <div className="hidden 2xl:flex justify-center h-[528px] max-w-full bg-gradient-to-r from-[rgba(23,111,235,0.5)] to-[rgba(255,128,255,0.5)] ">
        <div className="p-3 mt-[-92px] shadow-sm rounded-[32px] rotate-[-3deg]">
          <div className="box-border w-[532px] h-[676px] p-3 border-[1px] border-[#dae4f2] rounded-[32px] bg-white">
            <Image
              className="bg-gradient-to-r from-[#7296eb] to-[#eac0e9] rounded-t-3xl box-border"
              width={508}
              height={498}
              src={card1}
              alt="card"
            />
            <div className="box-border flex-col justify-center items-start border-[1px] border-[#dae4f2] rounded-b-[32px] px-6 w-[508px] h-[146px]">
              <div className="flex justify-start items-center mt-4 gap-4">
                <Image
                  className="flex items-start p-1 bg-[#e5f0ff] rounded-lg"
                  width={48}
                  height={48}
                  src={icon1}
                  alt="icon"
                />
                <p className="w-[201px] h-[32px] text-transparent bg-clip-text bg-gradient-to-r from-[#176feb] to-[#ff80ff] font-black uppercase text-3xl">
                  1—browse
                </p>
              </div>
              <p className="w-[365px] h-[54px] mt-3 text-[#7c899c] font-light text-lg">
                Browse our tech catalog with more than 20 top tech products
              </p>
            </div>
          </div>
        </div>

        <div className="p-3 mt-[-120px] shadow-sm rounded-[32px] ml-[-80px] z-10">
          <div className="box-border w-[532px] h-[676px] p-3 border-[1px] border-[#dae4f2] rounded-[32px] bg-white">
            <Image
              className="bg-gradient-to-r from-[#7296eb] to-[#eac0e9] rounded-t-3xl box-border"
              width={508}
              height={498}
              src={card2}
              alt="card"
            />
            <div className="box-border flex-col justify-center items-start border-[1px] border-[#dae4f2] rounded-b-[32px] px-6 w-[508px] h-[146px]">
              <div className="flex justify-start items-center mt-4 gap-4">
                <Image
                  className="flex items-start p-1 bg-[#e5f0ff] rounded-lg"
                  width={48}
                  height={48}
                  src={icon2}
                  alt="icon"
                />
                <p className="w-[201px] h-[32px] text-transparent bg-clip-text bg-gradient-to-r from-[#176feb] to-[#ff80ff] font-black uppercase text-3xl">
                  1—choose
                </p>
              </div>
              <p className="w-[365px] h-[54px] mt-3 text-[#7c899c] font-light text-lg">
                Exchange your hard earned AeroPoints for the item you want
              </p>
            </div>
          </div>
        </div>

        <div className="p-3 mt-[-89px] shadow-sm rounded-[32px] ml-[-80px] rotate-3 z-20">
          <div className="box-border w-[532px] h-[676px] p-3 border-[1px] border-[#dae4f2] rounded-[32px] bg-white">
            <Image
              className="bg-gradient-to-r from-[#7296eb] to-[#eac0e9] rounded-t-3xl box-border"
              width={508}
              height={498}
              src={card3}
              alt="card"
            />
            <div className="box-border flex-col justify-center items-start border-[1px] border-[#dae4f2] rounded-b-[32px] px-6 w-[508px] h-[146px]">
              <div className="flex justify-start items-center mt-4 gap-4">
                <Image
                  className="flex items-start p-1 bg-[#e5f0ff] rounded-lg"
                  width={48}
                  height={48}
                  src={icon3}
                  alt="icon"
                />
                <p className="w-[201px] h-[32px] text-transparent bg-clip-text bg-gradient-to-r from-[#176feb] to-[#ff80ff] font-black uppercase text-3xl">
                  3—enjoy!
                </p>
              </div>
              <p className="w-[365px] h-[54px] mt-3 text-[#7c899c] font-light text-lg">
                All done, you can relax! We’ll take care of delivery of your
                tech item!
              </p>
            </div>
          </div>
        </div>
      </div>
      <MWalkthrough />
      <TWalkthrough />
    </>
  );
};

export default Walkthrough;
