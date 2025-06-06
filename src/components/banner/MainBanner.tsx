import { StartIcon } from "../../assets/icons/StartIcon";
import { FooterBanner } from "./FooterBanner";
import BannerImage from "../../assets/images/Rectangle 2.png";
import Banner2Image from "../../assets/images/Rectangle 2 -1.png";

const brands = "200";
const products = "2,000";
const customers = "30,000";

export const MainBanner = () => {
  return (
    <>
      <div className="w-full h-[663px] max-md:h-[853px] bg-[#f2f0f1]">
        <div className="relative md:max-w-[1440px] md:mx-auto flex flex-col h-full">
          <div className="w-full md:h-full h-112 max-md:absolute bottom-0">
            <img
              src={BannerImage}
              className="w-full h-full bg-cover max-md:hidden"
            />
            <img
              src={Banner2Image}
              className="w-full h-full bg-cover md:hidden"
            />

            <div className="absolute left-1/2 top-1/2 max-md:hidden">
              <StartIcon w={"56"} h={"56"} />
            </div>
            <div className="absolute right-[61px] top-[86px] max-md:hidden">
              <StartIcon w={"104"} h={"104"} />
            </div>

            <div className="absolute left-[27px] top-[137px] md:hidden">
              <StartIcon w={"44"} h={"44"} />
            </div>
            <div className="absolute right-[21px] top-[40px] md:hidden">
              <StartIcon w={"76"} h={"76"} />
            </div>
          </div>

          <div className="absolute flex flex-col items-start text-black text-left left-[100px] top-[103px] max-md:top-10 max-md:left-4 max-md:right-4">
            <div className="w-[577px] h-[173px] inline-block leading-16 text-[64px] max-md:w-[315px] max-md:h-[93px] max-md:text-[36px] max-md:leading-[34px] font-intergralCF">
              <span className="block text-start mt-[-17px] max-md:mt-[-8px] max-md:leading-[34px]">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </span>
            </div>
            <div className="w-[545px] text-[16px] font-satoshi font-[400] mt-8 max-md:mt-5 text-black/60 max-md:w-full max-md:text-[14px] max-md:leading-5 max-md:h-[50px]">
              <span>
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </span>
            </div>
            <div className="bg-black text-white font-satoshi w-[210px] h-[52px] rounded-[62px] flex justify-center items-center mt-8 text-[16px] max-md:mx-auto max-md:w-full max-md:mt-6">
              <button className="">Shop now</button>
            </div>
            <div className="md:h-[74px] w-[596px] flex flex-row md:gap-8 mt-[32px] max-md:w-full max-md:flex-wrap max-md:mt-5">
              <div className="flex flex-col md:w-[141px] max-md:flex-1 max-md:ml-10 max-md:h-13 max-md:mr-[27.5px]">
                <h2 className="text-[40px] font-[700] leading-[100%] font-satoshi max-md:text-2xl">
                  {brands}+
                </h2>
                <span className="max-md:text-nowrap text-[16px] font-[400] leading-[22px] font-satoshi max-md:text-[12px]">
                  International Brands
                </span>
              </div>
              <div className="w-[1px] h-13 md:hidden border-l-[1px] border-black/10"></div>
              <div className="flex flex-col md:w-[156px] max-md:flex-1 max-md:mr-10 max-md:h-13 max-md:ml-[27.5px]">
                <h2 className="text-[40px] font-[700] leading-[100%] font-satoshi max-md:text-2xl">
                  {products}+
                </h2>
                <span className="max-md:text-nowrap text-[16px] font-[400] leading-[22px] font-satoshi max-md:text-[12px]">
                  High-Quality Products
                </span>
              </div>
              <div className="flex flex-col md:w-[171px] max-md:w-full max-md:items-center max-md:h-12 max-md:mt-3">
                <h2 className="text-[40px] font-[700] leading-[100%] font-satoshi max-md:text-2xl">
                  {customers}+
                </h2>
                <span className="max-md:text-nowrap text-[16px] font-[400] leading-[22px] font-satoshi max-md:text-[12px]">
                  Happy Customers
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterBanner />
    </>
  );
};
