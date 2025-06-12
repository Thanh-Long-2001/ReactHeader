import { Link } from "react-router-dom";
import { CancelIcon } from "../../assets/icons/CancelIcon";
import { CartIcon } from "../../assets/icons/CartIcon";
import { MenuIcon } from "../../assets/icons/MenuIcon";
import { SearchIcon } from "../../assets/icons/SearchIcon";
import { UserIcon } from "../../assets/icons/UserIcon";
import "./Header.css";

export const Header = () => {
  return (
    <div className="w-full h-27.5 max-md:h-14 flex items-center">
      <div className="w-full px-4">
        <div className="w-full max-w-310 h-12 md:mx-auto flex items-center gap-10 justify-between">
          <div className=" flex items-center gap-4">
            <div className="md:hidden block">
              <MenuIcon />
            </div>
            <h1 className=" md:text-[32px] text-[25.2px] leading-[100%] font-intergralCF -translate-y-1 max-md:-translate-y-0.5">
              <Link to="/">SHOP.CO</Link>
            </h1>
          </div>
          <div className="w-full max-w-80.25 hidden md:block font-satoshi">
            <ul className="flex gap-6 whitespace-nowrap">
              <li className="cursor-pointer hover:underline">
                <Link to="/categories">Shop</Link>
              </li>
              <li className="cursor-pointer hover:underline">On Sales</li>
              <li className="cursor-pointer hover:underline">New Arrivals</li>
              <li className="cursor-pointer hover:underline">Brands</li>
            </ul>
          </div>
          <div className="hidden max-w-144.25 h-full bg-[#F0F0F0] md:flex items-center rounded-[62px] gap-3 w-full pr-5">
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
            <div className="flex justify-between cursor-pointer">
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
