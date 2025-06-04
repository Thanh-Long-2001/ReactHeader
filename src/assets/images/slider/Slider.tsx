import Carousel from "react-multi-carousel";
import { getNumericStars, renderStars } from "../../../utils/renderStars";
import "react-multi-carousel/lib/styles.css";
import { useRef } from "react";
import LeftArrow from "../../icons/Arrow/arrow-down-bold 2.png";
import RightArrow from "../../icons/Arrow/arrow-down-bold 1.png";
import VerifyIcon from "../Frame.png";
import "./Slider.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //   },
  mobile: {
    breakpoint: { max: 464, min: 390 },
    items: 1,
  },
};

type Vote = {
  id: number;
  name: string;
  stars: string;
  comment: string;
};

export const Slider = ({ data }: { data: { items: Vote[] } }) => {
  const carouselRef = useRef<Carousel>(null);
  return (
    <div className="md:w-[1243px] w-full md:ml-[100px] md:mt-[80px] mt-[50px]">
      <div className="flex justify-between items-center md:mb-10 mb-6 font-intergralCF max-md:relative">
        <h2 className="md:text-[48px] font-[700] md:h-[58px] md:w-[654px] text-[32px] h-18 w-[286px] max-md:ml-4 max-md:leading-9 ">
          OUR HAPPY CUSTOMERS
        </h2>
        <div className="flex gap-2 max-md:absolute right-0 bottom-0">
          <button
            onClick={() => carouselRef?.current?.previous(1)}
            className="bg-transparent px-2 pt-2 rounded"
          >
            <img src={LeftArrow} />
          </button>
          <button
            onClick={() => carouselRef?.current?.next(1)}
            className="bg-transparent px-2 pt-2 rounded max-md:mr-2"
          >
            <img src={RightArrow} />
          </button>
        </div>
      </div>

      <Carousel
        responsive={responsive}
        itemClass="carouselItem"
        ref={carouselRef}
        arrows={false}
        containerClass="flex md:justify-center rounded-[20px] max-md:ml-4"
      >
        {data?.items?.map((item: Vote) => (
          <div
            key={item.id}
            className="md:w-[400px] md:h-[240px] h-[186.19px] w-[358px] rounded-[20px] border border-gray-300"
          >
            <div className="md:w-[336px] w-full flex flex-col md:ml-10 max-md:p-6">
              <div className="flex items-center md:mb-2 md:mt-[28px]">
                {renderStars(getNumericStars(item.stars))}
                <span className="ml-2 text-sm text-black/60">{item.stars}</span>
              </div>
              <div className="flex gap-1 max-md:mt-3 max-md:w-full max-md:h-[19px] items-center">
                <span className="text-[16px]">{item.name}</span>
                <img src={VerifyIcon} width={19} height={19}></img>
              </div>
              <p className="font-satoshi text-[16px] max-md:text-[14px] md:mt-3 mt-[8px] max-md:leading-5">
                {item.comment}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
