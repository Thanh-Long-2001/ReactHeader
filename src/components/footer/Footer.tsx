import { FooterContent } from "./content/FooterContent";
import PaymentImg from "../../assets/images/payment/Frame 53.png";
import { EmailIcon } from "../../assets/icons/EmailIcon";
export const Footer = () => {
  return (
    <div className="w-full h-[499px] bg-[#f0f0f0] flex justify-center items-center flex-col mt-[150px] relative">
      <div className="w-[1240px] h-[180px] bg-black flex px-[64px] absolute top-[-90px] rounded-[20px]">
        <div className="flex-1 text-white text-[40px] font-[700] leading-[45px] flex items-center font-intergralCF">
          <span className="h-[94px] w-[551px]">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </span>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center gap-[14px]">
          <div className="flex items-center rounded-[62px] w-[349px] h-[48px] bg-white">
            <div className="ml-4 mr-3">
              <EmailIcon />
            </div>
            <input placeholder="Enter your email address"></input>
          </div>
          <div className="flex rounded-[62px] w-[349px] h-[48px] bg-white items-center justify-center">
            <span>Subscribe to Newsletter</span>
          </div>
        </div>
      </div>
      <FooterContent />

      <div className="w-[1240px] h-[1px] border-t border-gray-300 mt-[50px]"></div>
      <div className="w-[1240px] flex justify-between mt-[25px]">
        <span>Shop.co © 2000-2023, All Rights Reserved</span>
        <div>
          <img src={PaymentImg}></img>
        </div>
      </div>
    </div>
  );
};
