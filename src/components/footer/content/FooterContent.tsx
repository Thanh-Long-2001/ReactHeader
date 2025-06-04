import SocialContact from "../../../assets/images/socialContact/Social.png";

export const FooterContent = () => {
  return (
    <div className="md:h-[177px] md:w-[1240px] w-full max-md:px-4 flex max-md:flex-col md:justify-between font-satoshi md:mt-[50px] mt-[31.58px]">
      <div className="flex flex-col md:justify-between md:w-[248px] md:mr-[113.5px] w-full">
        <div className="md:text-[33.45px] w-[167px] h-[23px] inline-block text-[28.85px]">
          <span className="block font-intergralCF mt-[-17px]">SHOP.CO</span>
        </div>
        <p className="text-[14px] text-black/60 font-[400] max-md:mt-[14px] md:leading-5.5 leading-5 font-satoshi">
          We have clothes that suits your style and which you’re proud to wear.
          From women to men.
        </p>
        <div className="flex w-[148px] max-md:mt-5">
          <img src={SocialContact}></img>
        </div>
      </div>
      <div className="md:flex md:flex-1 md:justify-between grid grid-cols-2 grid-rows-2 max-md:gap-y-6 max-md:mt-[24.42px] max-md:h-79">
        <div className="flex flex-col w-26">
          <div className="md:h-[30px] flex items-start font-satoshi">
            <span className="md:text-[16px] text-[14px] font-[500] leading-4.5">
              COMPANY
            </span>
          </div>

          <ul className="h-[133px] text-nowrap font-[400] flex flex-col justify-between mt-[26px] font-satoshi md:text-[16px] text-[14px] leading-[19px] text-black/60 max-md:mt-4">
            <li>
              <span>About</span>
            </li>
            <li>
              <span>Features</span>
            </li>
            <li>
              <span>Works</span>
            </li>
            <li>
              <span>Career</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-34">
          <div className="md:h-[30px] flex items-start font-satoshi">
            <span className="md:text-[16px] text-[14px] font-[500] leading-4.5">
              HELP
            </span>
          </div>
          <ul className="h-[133px] text-nowrap font-[400] flex flex-col md:text-[16px] text-[14px] leading-[19px] justify-between mt-[26px] text-black/60 max-md:mt-4">
            <li>
              <span>Customer Support</span>
            </li>
            <li>
              <span>Delivery Details</span>
            </li>
            <li>
              <span>Terms & Conditions</span>
            </li>
            <li>
              <span>Privacy Policy</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-[149px]">
          <div className="md:h-[30px] flex items-start font-satoshi">
            <span className="md:text-[16px] text-[14px] font-[500] leading-4.5">
              FAQ
            </span>
          </div>
          <ul className="h-[133px] text-nowrap font-[400] flex flex-col md:text-[16px] text-[14px] leading-[19px] justify-between mt-[26px] text-black/60 max-md:mt-4">
            <li>
              <span>Account</span>
            </li>
            <li>
              <span>Manage Deliveries</span>
            </li>
            <li>
              <span>Orders</span>
            </li>
            <li>
              <span>Payments</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-[149px]">
          <div className="md:h-[30px] flex items-start font-satoshi">
            <span className="md:text-[16px] text-[14px] font-[500] leading-4.5">
              RESOURCES
            </span>
          </div>
          <ul className="h-[133px] text-nowrap font-[400] flex flex-col md:text-[16px] text-[14px] leading-[19px] justify-between mt-[26px] text-black/60 max-md:mt-4">
            <li>
              <span>Free eBooks</span>
            </li>
            <li>
              <span>Development Tutorial</span>
            </li>
            <li>
              <span>How to - Blog</span>
            </li>
            <li>
              <span>Youtube Playlist</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
