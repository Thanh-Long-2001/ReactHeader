import Image7 from "../../../assets/images/newArrival/image7.png";
import Image8 from "../../../assets/images/newArrival/image8.png";
import Image9 from "../../../assets/images/newArrival/image9.png";
import Image10 from "../../../assets/images/newArrival/image10.png";
import { getNumericStars, renderStars } from "../../../utils/renderStars";
import "./NewArrival.css";

const imageMap: Record<string, string> = {
  Image7,
  Image8,
  Image9,
  Image10,
};

type Product = {
  id: number;
  name: string;
  stars: string;
  price: number;
  image: string;
  discountPercent: number;
};

const capitalizeWords = (str: string) =>
  str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const cacl = (price: number, discount: number) => {
  if (discount !== 0) {
    return price - (price * discount) / 100;
  } else {
    return price;
  }
};

export const NewArrival = ({
  data,
}: {
  data: { title: string; items: Product[] };
}) => {
  return (
    <div
      className={`flex flex-col md:h-186.25 md:max-w-310 w-full items-center max-md:pb-10`}
    >
      <div className="font-intergralCF text-5xl leading-[100%] md:mt-16 mt-10 mb-[55px] md:w-[403px] w-full md:h-14.5 h-9.5 flex items-center justify-center max-md:text-[32px]">
        {data?.title}
      </div>
      <div className="w-full flex flex-row md:gap-5 max-md:px-4 max-md:gap-4 max-md:overflow-x-auto max-md:whitespace-nowrap max-md:scroll-smooth scrollbar-hide justify-between overflow-hidden">
        {data?.items &&
          data.items.map((item: Product) => (
            <>
              <div className="flex flex-col  ">
                <div className="max-w-73.75 max-h-74.5 mb-4 max-md:w-[198px] max-md:h-50">
                  <img
                    src={imageMap[item.image]}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-[20px]"
                  />
                </div>
                <span className="mb-2 font-satoshi font-[700] md:text-xl text-base">
                  {capitalizeWords(item.name)}
                </span>

                <div className="flex items-center mb-2 md:gap-[5.31px] gap-1.1">
                  {renderStars(getNumericStars(item.stars))}
                  <span className="ml-2 text-sm text-black/60  ">
                    {item.stars}
                  </span>
                </div>
                <div className="flex gap-2.5 font-[700] md:text-2xl w-[200px] text-xl ">
                  <div className="flex-1">
                    ${cacl(item.price, item.discountPercent)}
                  </div>
                  <div className="flex-1 text-black/60 line-through decoration-inherit">
                    {item.discountPercent !== 0 ? "$" + item.price : ""}
                  </div>
                  {item.discountPercent ? (
                    <div className="flex-1 text-red-500 rounded-[62px] bg-red-100 flex justify-center text-lg items-center">
                      {item.discountPercent
                        ? "-" + item.discountPercent + "%"
                        : ""}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </>
          ))}
      </div>
      <div className="md:w-54.5 md:h-13 flex justify-center items-center mt-9 px-4 h-11.5 w-full">
        <button className="w-full h-full rounded-[62px] border-[0.5px] border-solid border-gray-300">
          View All
        </button>
      </div>
    </div>
  );
};
