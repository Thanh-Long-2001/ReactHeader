import { Calvin } from "../../assets/icons/BrandIcon.tsx/Calvin";
import { Gucci } from "../../assets/icons/BrandIcon.tsx/Gucci";
import { Prada } from "../../assets/icons/BrandIcon.tsx/Prada";
import { RazaBrand } from "../../assets/icons/BrandIcon.tsx/RazaBrand";
import { VerSaceBrand } from "../../assets/icons/BrandIcon.tsx/VerSaceBrand";

export const FooterBanner = () => {
  return (
    <div className="w-full bg-black h-[122px] flex justify-center ">
      <div className="w-[1440px] flex items-center justify-center">
        <div className="flex gap-[106px] w-full ml-25">
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
      </div>
    </div>
  );
};
