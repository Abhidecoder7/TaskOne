import Image from "next/image";
import { CiStar, CiDiscount1 } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import Logo from '@/app/icons/logo.svg'; 


export default function Home() {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="flex justify-center items-center flex-col">
        <div className="flex justify-around items-center bg-[#F5F5F5] w-[1440px] h-[42px]">
          <div className="w-[160px] h-[14px]">
            <a href="">  <p className="font-normal text-left text-[14px] leading-[14px] font-ubuntu text-[#666666]">
              Welcome to Quiksale!
            </p></a>
          
          </div>

          <div className="flex justify-evenly text-[#666666] gap-2 items-center">
            <div className="flex gap-2">
              <CiStar className="text-[#FF4747]" />
              <a href=""><p className="font-medium text-[14px] leading-[18px] font-ubuntu text-[#666666]">
                Free Business Listing
              </p></a>
            </div>
            <div className="bg-[#D9D9D9] border-[1px] h-[18px] rounded-sm"></div>
            <div className="flex gap-2">
              <CiDiscount1 className="text-[#FF4747]" />
              <a href=""><p className="font-medium text-[14px] leading-[18px] font-ubuntu text-[#666666]">
                Sell Your Product
              </p></a>
            </div>
            <div className="bg-[#D9D9D9] border-[1px] h-[18px] rounded-sm"></div>
            <a href="tel:696969696969669" className="flex gap-2">
              <FiPhone className="text-[#FF4747]" />
              <p className="font-medium text-[14px] leading-[18px] font-ubuntu text-[#666666]">
                1234567
              </p>
            </a>
          </div>
        </div>

        {/* <div className="h-[90px] bg-[#FFFFFF] w-[1440px] flex  items-center">
          <Logo className="w-[119px] h-[37px] top-[69px] left-[120px] " /> */}
          {/* searchbar */}
         

          {/* login/signup */}



        {/* </div> */}
      </div>
    </div>
  );
}
