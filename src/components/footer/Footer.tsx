import { FooterContent } from "./content/FooterContent";
import PaymentImg from "../../assets/images/payment/Frame 53.png";
import { EmailIcon } from "../../assets/icons/EmailIcon";
export const Footer = () => {
  return (
    <div className="w-full md:h-[499px] h-211.5 bg-[#f0f0f0] flex md:justify-center md:items-center flex-col md:mt-37.5 mt-[181.81px] relative ">
      <div className="md:max-w-310 w-full md:py-[35px] md:-mt-35 -mt-[146.5px] max-md:px-4">
        <div className="w-full md:h-45 h-[293px] bg-black flex max-md:flex-col md:px-16 px-6 rounded-[20px] ">
          <div className="flex-1 text-white md:text-[40px] text-[32px] max-md:leading-[35px] font-[700] leading-[45px] flex items-center font-intergralCF w-full">
            <span className="h-[94px] md:max-w-[551px] w-full max-md:w-[297px]">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </span>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center gap-3.5">
            <div className="flex items-center  md:w-[349px] w-full md:h-12 h-10.5 ">
              <div className="rounded-[62px] bg-white w-full flex h-full items-center">
                <div className="ml-4 mr-2.75">
                  <EmailIcon />
                </div>
                <input
                  placeholder="Enter your email address"
                  className="outline-none"
                ></input>
              </div>
            </div>
            <div className=" md:w-87.25 w-full md:h-12 h-10.5">
              <div className="w-full bg-white h-full rounded-[62px] flex items-center justify-center">
                <span>Subscribe to Newsletter</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterContent />

      <div className="md:max-w-310 w-full md:mt-12.5 max-md:mt-10 max-md:px-4">
        <div className="h-[1px] border-t border-gray-300"></div>
      </div>
      <div className="md:max-w-310 w-full flex max-md:flex-col md:justify-between max-md:mt-4 items-start max-md:items-center">
        <span className="text-sm font-satoshi max-md:leading-[100%] md:mt-6.25">
          Shop.co © 2000-2023, All Rights Reserved
        </span>
        <div className="md:mt-5 mt-4">
          <img src={PaymentImg}></img>
        </div>
      </div>
    </div>
  );
};
