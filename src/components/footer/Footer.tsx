// import { FooterContent } from "./content/FooterContent";
// import PaymentImg from "../../assets/images/payment/Frame 53.png";
import { EmailIcon } from "../../assets/icons/EmailIcon";
export const Footer = () => {
  return (
    <div className="w-full md:h-[499px] h-[846px] bg-[#f0f0f0] flex justify-center items-center flex-col mt-[150px] relative">
      <div className="md:w-[1240px] md:h-[180px] h-[293px] bg-black flex md:px-[64px] absolute top-[-90px] rounded-[20px] max-md:flex-col max-md:ml-4 max-md:mr-4">
        <div className="flex-1 text-white md:text-[40px] text-[32px] max-md:leading-[35px] font-[700] leading-[45px] flex items-center font-intergralCF w-full max-md:ml-6">
          <span className="h-[94px] md:w-[551px] w-[297px]">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </span>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center gap-[14px]">
          <div className="flex items-center rounded-[62px] md:w-[349px] h-[48px] bg-white max-md:ml-4 max-md:mr-4">
            <div className="ml-4 mr-3">
              <EmailIcon />
            </div>
            <input placeholder="Enter your email address"></input>
          </div>
          <div className=" md:w-[349px] w-full h-[48px] max-md:px-4">
            <div className="w-full bg-white h-full rounded-[62px] flex items-center justify-center">
              <span>Subscribe to Newsletter</span>
            </div>
          </div>
        </div>
      </div>
      {/* <FooterContent /> */}

      {/* <div className="w-[1240px] h-[1px] border-t border-gray-300 mt-[50px]"></div>
      <div className="w-[1240px] flex justify-between mt-[25px]">
        <span>Shop.co © 2000-2023, All Rights Reserved</span>
        <div>
          <img src={PaymentImg}></img>
        </div>
      </div> */}
    </div>
  );
};
