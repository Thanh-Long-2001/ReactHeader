import { CancelIcon } from "../../assets/icons/CancelIcon";
import { CartIcon } from "../../assets/icons/CartIcon";
import { MenuIcon } from "../../assets/icons/MenuIcon";
import { SearchIcon } from "../../assets/icons/SearchIcon";
import { UserIcon } from "../../assets/icons/UserIcon";
import "./Header.css";

export const Header = () => {
  return (
    <div className="w-full h-27.5 max-md:h-14 flex items-center">
      <div className="w-full px-3">
        <div className="w-full max-w-310 h-12 mx-auto flex items-center gap-10 justify-between">
          <div className="md:w-40 w-31.5 md:h-5.5 h-4.5 flex items-center justify-center ">
            <div className="md:hidden block mr-4 ml-4">
              <MenuIcon />
            </div>
            <span className="w-full h-full font-intergralCF text-lg md:text-[32px] md:-mt-8 -mt-3.25">
              SHOP.CO
            </span>
          </div>
          <div className="w-full max-w-80.25 hidden md:block font-satoshi">
            <ul className="flex gap-6 whitespace-nowrap">
              <li>Shop</li>
              <li>On Sales</li>
              <li>New Arrivals</li>
              <li>Brands</li>
            </ul>
          </div>
          <div className="hidden max-w-144.25 h-full bg-[#F0F0F0] md:flex items-center rounded-[62px] gap-3 w-full">
            <div className="ml-4">
              <SearchIcon opacity="0.4" />
            </div>
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-transparent outline-none w-full text-base font-satoshi text-black/60"
            />
          </div>
          <div className="relative md:block md:w-15.5 w-full max-w-24">
            <div className="absolute -top-17.5 right-0 max-md:hidden">
              <CancelIcon />
            </div>
            <div className="flex justify-between ">
              <SearchIcon opacity="1" className="block md:hidden" />
              <CartIcon />
              <UserIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
