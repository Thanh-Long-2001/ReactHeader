import SocialContact from "../../../assets/images/socialContact/Social.png";

export const FooterContent = () => {
  return (
    <div className="md:h-44.25 md:max-w-310 w-full max-md:px-4 flex max-md:flex-col font-satoshi md:mt-[50px] mt-[31.58px] md:gap-[113.5px]">
      <div className="flex flex-col md:justify-between md:w-62  w-full">
        <div className="md:text-[33.45px] w-41.75 h-5.75 inline-block text-[28.85px]">
          <span className="block font-intergralCF -mt-4.25">SHOP.CO</span>
        </div>
        <p className="text-sm text-black/60 font-[400] max-md:mt-3.5 md:leading-5.5 leading-5 font-satoshi">
          We have clothes that suits your style and which you’re proud to wear.
          From women to men.
        </p>
        <div className="flex w-37 max-md:mt-5">
          <img src={SocialContact}></img>
        </div>
      </div>
      <div className="md:flex md:flex-1 md:justify-between grid grid-cols-2 grid-rows-2 max-md:gap-y-6 max-md:mt-[24.42px] max-md:h-79 md:gap-[113.5px] flex-wrap">
        <div className="flex flex-col">
          <div className="md:h-7.5 flex items-start font-satoshi">
            <span className="md:text-base text-sm font-[500] leading-4.5">
              COMPANY
            </span>
          </div>

          <ul className="h-33.25 text-wrap font-[400] flex flex-col justify-between mt-6.5 font-satoshi md:text-base text-sm leading-4.75 text-black/60 max-md:mt-4">
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
        <div className="flex flex-col">
          <div className="md:h-[30px] flex items-start font-satoshi">
            <span className="md:text-base text-sm font-[500] leading-4.5">
              HELP
            </span>
          </div>
          <ul className="h-33.25 text-wrap font-[400] flex flex-col md:text-base text-sm leading-4.75 justify-between mt-6.5 text-black/60 max-md:mt-4">
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
        <div className="flex flex-col">
          <div className="md:h-7.5 flex items-start font-satoshi">
            <span className="md:text-base text-sm font-[500] leading-4.5">
              FAQ
            </span>
          </div>
          <ul className="h-33.25 text-wrap font-[400] flex flex-col md:text-base text-sm leading-4.75 justify-between mt-6.5 text-black/60 max-md:mt-4">
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
        <div className="flex flex-col">
          <div className="md:h-[30px] flex items-start font-satoshi">
            <span className="md:text-[16px] text-[14px] font-[500] leading-4.5">
              RESOURCES
            </span>
          </div>
          <ul className="h-33.25 text-wrap font-[400] flex flex-col md:text-base text-sm leading-4.75 justify-between mt-6.5 text-black/60 max-md:mt-4">
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
