import { Calvin } from "../../assets/icons/BrandIcon.tsx/Calvin";
import { Gucci } from "../../assets/icons/BrandIcon.tsx/Gucci";
import { Prada } from "../../assets/icons/BrandIcon.tsx/Prada";
import { RazaBrand } from "../../assets/icons/BrandIcon.tsx/RazaBrand";
import { VerSaceBrand } from "../../assets/icons/BrandIcon.tsx/VerSaceBrand";

export const FooterBanner = () => {
  return (
    <div className="w-full bg-black h-[146px] flex justify-center max-md:mb-[10px]">
      <div className="w-[1440px] max-md:h-[146px] bg-black flex md:items-center md:justify-between max-md:w-full">
        <div className="flex gap-[106px] w-full ml-25 max-md:hidden">
          <div>
            <VerSaceBrand />
          </div>
          <div>
            <RazaBrand />
          </div>
          <div>
            <Gucci />
          </div>
          <div>
            <Prada />
          </div>
          <div>
            <Calvin />
          </div>
        </div>

        <div className="flex flex-wrap justify-around w-full md:hidden content-center gap-y-4">
          <div>
            <VerSaceBrand w="116.74" h="23.25" />
          </div>
          <div>
            <RazaBrand w="63.81" h="26.65" />
          </div>
          <div>
            <Gucci w="109.39" h="25.24" />
          </div>
          <div>
            <Prada w="127" h="20.47" />
          </div>
          <div>
            <Calvin w="134.84" h="21.75" />
          </div>
        </div>
      </div>
    </div>
  );
};
