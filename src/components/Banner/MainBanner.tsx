import { StartIcon } from "../../assets/icons/StartIcon";
import { FooterBanner } from "./FooterBanner";
import BannerImage from "../../assets/images/Rectangle 2.png";

const brands = 200;
const products = 2000;
const customers = 30000;

export const MainBanner = () => {
  return (
    <>
      <div className="w-full md:h-[663px] bg-[#f2f0f1]">
        <div className=" relative w-[1440px] mx-auto">
          <img src={BannerImage} className="w-full h-full bg-cover" />

          <div className="absolute flex flex-col items-start text-black text-left left-[100px] top-[103px]">
            <div className="w-[577px]">
              <h1 className="text-[64px] font-[Intergral CF] font-[700] leading-[64px] ">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
            </div>
            <div className="w-[545px] text-[16px] font-[Satoshi] font-[400]">
              <span>
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </span>
            </div>
            <button className="bg-black hover:bg-black-700 text-white font-semibold py-4 px-[54px] rounded-[62px] shadow-lg mt-[32px]">
              Get Started
            </button>
            <div className="h-[74px] w-[596px] flex flex-row gap-8 mt-[32px]">
              <div className="flex flex-col w-[141px]">
                <h2 className="text-[40px] font-[700] leading-[100%] font-[Satoshi]">
                  {brands.toLocaleString()}+
                </h2>
                <span className="text-[16px] font-[400] leading-[22px] font-[Satoshi]">
                  International Brands
                </span>
              </div>
              <div className="flex flex-col w-[156px]">
                <h2 className="text-[40px] font-[700] leading-[100%] font-[Satoshi]">
                  {products.toLocaleString()}+
                </h2>
                <span className="text-[16px] font-[400] leading-[22px] font-[Satoshi]">
                  High-Quality Products
                </span>
              </div>
              <div className="flex flex-col w-[171px]">
                <h2 className="text-[40px] font-[700] leading-[100%] font-[Satoshi]">
                  {customers.toLocaleString()}+
                </h2>
                <span className="text-[16px] font-[400] leading-[22px] font-[Satoshi]">
                  Happy Customers
                </span>
              </div>
            </div>
          </div>

          <div className="absolute left-1/2 top-1/2">
            <StartIcon w={"56"} h={"56"} />
          </div>
          <div className="absolute right-[61px] top-[86px]">
            <StartIcon w={"104"} h={"104"} />
          </div>
        </div>
      </div>
      <FooterBanner />
    </>
  );
};
