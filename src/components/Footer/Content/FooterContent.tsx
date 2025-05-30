import SocialContact from "../../../assets/images/SocialContact/Social.png";

export const FooterContent = () => {
  return (
    <div className="h-[177px] w-[1240px] flex justify-between font-[Satoshi] mt-[170px]">
      <div className="flex flex-col justify-between w-[248px]">
        <div className="text-[40px] font-[800] h-[30px]">
          <span className="w-full h-full flex items-center justify-start">
            SHOP.CO
          </span>
        </div>
        <p className="text-[14px] text-gray-500 font-[400]">
          We have clothes that suits your style and which you’re proud to wear.
          From women to men.
        </p>
        <div className="flex w-[148px]">
          <img src={SocialContact}></img>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="h-[30px] flex items-start">
          <span className="text-[24px] font-[500]">COMPANY</span>
        </div>

        <ul className="h-[133px] flex flex-col justify-between mt-[26px]">
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
        <div className="h-[30px] flex items-start">
          <span className="text-[24px] font-[500]">HELP</span>
        </div>
        <ul className="h-[133px] flex flex-col justify-between mt-[26px]">
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
        <div className="h-[30px] flex items-start">
          <span className="text-[24px] font-[500]">FAQ</span>
        </div>
        <ul className="h-[133px] flex flex-col justify-between mt-[26px]">
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
        <div className="h-[30px] flex items-start">
          <span className="text-[24px] font-[500]">RESOURCES</span>
        </div>
        <ul className="h-[133px] flex flex-col justify-between mt-[26px]">
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
