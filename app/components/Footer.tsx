import Image from 'next/image';
import Link from 'next/link';
import Github from '../../public/assets/icons/github-default.svg';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="flex justify-center h-[200px] xl:h-[400px] items-center text-center">
      <div>
        <a
          href="https://github.com/AmayaLuciano/frontend-aerolab-challenge"
          target="_blank"
        >
          <Image src={Github} alt="Github icon" width={30} height={30} />
        </a>
      </div>
      <div>
        <p className="text-[#7C899C] font-normal tracking-wide">
          View this repository
        </p>
      </div>
    </footer>
  );
};

export default Footer;
