import { ThumnailPreviewProduct } from "./ThumnailPreviewProduct";
import Image1 from "../../../assets/images/products/men/21d6bcec533545a2b1e10e90b8059bc1bc97eab5.png";
import { useState } from "react";

export const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(Image1);

  const handleSetImg = (img: string) => {
    setSelectedImage(img);
  };
  return (
    <div className="w-full max-w-310 mx-auto md:h-[530px] flex gap-4 ">
      <div className="flex flex-1 gap-3.5">
        <ThumnailPreviewProduct onSelect={handleSetImg} />
        <div
          className="h-full flex-1 bg-cover rounded-[20px] bg-center"
          style={{ backgroundImage: `url(${selectedImage})` }}
        ></div>
      </div>
      <div className="bg-amber-400 flex-1"></div>
    </div>
  );
};
