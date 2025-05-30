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
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
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
    <div className="w-[1243px] ml-[100px] mt-[80px]">
      <div className="flex justify-between items-center mb-[40px]">
        <h2 className="text-[48px] font-[700]">OUR HAPPY CUSTOMERS</h2>
        <div className="flex gap-2">
          <button
            onClick={() => carouselRef?.current?.previous(1)}
            className="bg-transparent p-2 rounded"
          >
            <img src={LeftArrow} />
          </button>
          <button
            onClick={() => carouselRef?.current?.next(1)}
            className="bg-transparent p-2 rounded"
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
        containerClass="flex justify-center rounded-[20px] "
      >
        {data?.items?.map((item: Vote) => (
          <div
            key={item.id}
            className="w-[400px] h-[240px] rounded-[20px] border border-gray-300"
          >
            <div className="w-[336px] flex flex-col ml-[40px]">
              <div className="flex items-center mb-2 mt-[28px]">
                {renderStars(getNumericStars(item.stars))}
                <span className="ml-2 text-sm text-gray-500">{item.stars}</span>
              </div>
              <div className="flex gap-1">
                <span className="">{item.name}</span>
                <img src={VerifyIcon}></img>
              </div>
              <p className="font-[Satoshi] text-[16px] mt-3">{item.comment}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
