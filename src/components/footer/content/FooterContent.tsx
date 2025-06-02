import SocialContact from "../../../assets/images/socialContact/Social.png";

export const FooterContent = () => {
  return (
    <div className="h-[177px] w-[1240px] flex justify-between font-satoshi mt-[170px]">
      <div className="flex flex-col justify-between w-[248px]">
        <div className="text-[33.45px] w-[167px] h-[23px] inline-block">
          <span className="block font-intergralCF mt-[-17px]">SHOP.CO</span>
        </div>
        <p className="text-[14px] text-black/60 font-[400]">
          We have clothes that suits your style and which you’re proud to wear.
          From women to men.
        </p>
        <div className="flex w-[148px]">
          <img src={SocialContact}></img>
        </div>
      </div>
      <div className="flex flex-col w-26">
        <div className="h-[30px] flex items-start">
          <span className="text-[16px] font-[500]">COMPANY</span>
        </div>

        <ul className="h-[133px] text-nowrap font-[400] flex flex-col justify-between mt-[26px] font-satoshi text-[16px] leading-[19px] text-black/60">
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
        <div className="h-[30px] flex items-start">
          <span className="text-[16px] font-[500]">HELP</span>
        </div>
        <ul className="h-[133px] text-nowrap font-[400] flex flex-col text-[16px] leading-[19px] justify-between mt-[26px] text-black/60">
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
        <div className="h-[30px] flex items-start">
          <span className="text-[16px] font-[500]">FAQ</span>
        </div>
        <ul className="h-[133px] text-nowrap font-[400] flex flex-col text-[16px] leading-[19px] justify-between mt-[26px] text-black/60">
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
        <div className="h-[30px] flex items-start">
          <span className="text-[16px] font-[500]">RESOURCES</span>
        </div>
        <ul className="h-[133px] text-nowrap font-[400] flex flex-col text-[16px] leading-[19px] justify-between mt-[26px] text-black/60">
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
  );
};
