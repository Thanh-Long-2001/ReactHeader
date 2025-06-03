import { CancelIcon } from "../../assets/icons/CancelIcon";
import { CartIcon } from "../../assets/icons/CartIcon";
import { MenuIcon } from "../../assets/icons/MenuIcon";
import { SearchIcon } from "../../assets/icons/SearchIcon";
import { UserIcon } from "../../assets/icons/UserIcon";
import "./Header.css";

export const Header = () => {
  return (
    <div className="w-full h-[110px] max-md:h-14 flex items-center">
      <div className="w-full px-[12px]">
        <div className="w-full max-w-[1240px] h-[48px] mx-auto flex items-center gap-10 justify-between">
          <div className="md:w-40 w-[126px] md:h-[22px] h-[18px] flex items-center justify-center ">
            <div className="md:hidden block mr-4 ml-4">
              <MenuIcon />
            </div>
            <span className="w-full h-full font-intergralCF text-[18px] md:text-[32px] md:mt-[-32px] mt-[-13px]">
              SHOP.CO
            </span>
          </div>
          <div className="w-full max-w-[321px] hidden md:block font-satoshi">
            <ul className="flex gap-6 whitespace-nowrap">
              <li>Shop</li>
              <li>On Sales</li>
              <li>New Arrivals</li>
              <li>Brands</li>
            </ul>
          </div>
          <div className="hidden max-w-[577px] h-full bg-[#F0F0F0] md:flex items-center rounded-[62px] gap-3 w-full">
            <div className="ml-4">
              <SearchIcon opacity="0.4" />
            </div>
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-transparent outline-none w-full text-[16px] font-satoshi text-black/60"
            />
          </div>
          <div className="relative md:block md:w-[62px] w-full max-w-[96px]">
            <div className="absolute top-[-70px] right-0 max-md:hidden">
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
