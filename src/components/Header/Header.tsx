import { CancelIcon } from "../../assets/icons/CancelIcon";
import { CartUserIcon } from "../../assets/icons/CartUserIcon";
import { MenuIcon } from "../../assets/icons/MenuIcon";
import { SearchIcon } from "../../assets/icons/SearchIcon";
import { ThreeIcon } from "../../assets/icons/ThreeIcon";
import "./Header.css";

export const Header = () => {
  return (
    <div className="w-full h-[110px] flex items-center">
      <div className="w-full px-[12px]">
        <div className="w-full max-w-[1240px] h-[48px] mx-auto flex items-center gap-10 justify-between md:justify-normal">
          <div className="md:w-40 w-[126px] md:h-[22px] h-[18px] font-integral flex items-center justify-center">
            <div className="md:hidden block">
              <MenuIcon />
            </div>
            <span className="w-full h-full font-[800] text-[18px] md:text-[36px] flex items-center justify-center">
              SHOP.CO
            </span>
          </div>
          <div className="w-full max-w-[321px] hidden md:block">
            <ul className="flex gap-6 whitespace-nowrap">
              <li>Shop</li>
              <li>On Sales</li>
              <li>New Arrivals</li>
              <li>Brands</li>
            </ul>
          </div>
          <div className="hidden max-w-[577px] h-full bg-[#F0F0F0] md:flex items-center rounded-[62px] gap-3 w-full">
            <div className="ml-4">
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="Search for products"
              className="bg-transparent outline-none w-full text-sm font-[Satoshi]"
            />
          </div>
          <div className="relative md:block md:w-[62px] w-full max-w-[96px]">
            <div className="absolute top-[-70px] right-0">
              <CancelIcon />
            </div>
            <div className="md:block hidden">
              <CartUserIcon />
            </div>
            <div className="md:hidden block">
              <ThreeIcon />
            </div>
            {/* <CartUserIcon />
                        ThreeIcon */}
          </div>
        </div>
      </div>
    </div>
  );
};
