import { FooterContent } from "./content/FooterContent";
import PaymentImg from "../../assets/images/payment/Frame 53.png";
import { EmailIcon } from "../../assets/icons/EmailIcon";
export const Footer = () => {
  return (
    <div className="w-full md:h-[499px] h-[846px] bg-[#f0f0f0] flex md:justify-center md:items-center flex-col md:mt-[150px] mt-[181.81px] relative ">
      <div className="md:w-[1240px] md:h-[180px] h-[293px] bg-black flex md:px-[64px] rounded-[20px] md:py-[35px] max-md:flex-col max-md:ml-4 max-md:mr-4  md:-mt-35 -mt-[146.5px] px-4">
        <div className="flex-1 text-white md:text-[40px] text-[32px] max-md:leading-[35px] font-[700] leading-[45px] flex items-center font-intergralCF w-full max-md:ml-2">
          <span className="h-[94px] md:w-[551px] w-[297px]">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </span>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center gap-[14px]">
          <div className="flex items-center  md:w-[349px] max-md:px-2 w-full md:h-12 h-10.5 ">
            <div className="rounded-[62px] bg-white w-full flex h-full items-center">
              <div className="ml-4 mr-[11px]">
                <EmailIcon />
              </div>
              <input placeholder="Enter your email address"></input>
            </div>
          </div>
          <div className=" md:w-[349px] w-full md:h-12 h-10.5 max-md:px-2">
            <div className="w-full bg-white h-full rounded-[62px] flex items-center justify-center">
              <span>Subscribe to Newsletter</span>
            </div>
          </div>
        </div>
      </div>
      <FooterContent />

      <div className="md:w-[1240px] w-full md:mt-[50px] max-md:mt-10 max-md:px-4">
        <div className="h-[1px] border-t border-gray-300"></div>
      </div>
      <div className="md:w-[1240px] w-full flex max-md:flex-col md:justify-between md:mt-[25px] mt-4 items-center">
        <span className="text-[14px] font-satoshi max-md:leading-[100%]">
          Shop.co © 2000-2023, All Rights Reserved
        </span>
        <div className="mt-4">
          <img src={PaymentImg}></img>
        </div>
      </div>
    </div>
  );
};
