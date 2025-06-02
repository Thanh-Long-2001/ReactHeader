import Image7 from "../../../assets/images/newArrival/image7.png";
import Image8 from "../../../assets/images/newArrival/image8.png";
import Image9 from "../../../assets/images/newArrival/image9.png";
import Image10 from "../../../assets/images/newArrival/image10.png";
import { getNumericStars, renderStars } from "../../../utils/renderStars";

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
    <div className="flex flex-col h-[745px] w-[1240px] items-center border-b-[0.1px] border-b-black/10 ml-[100px]">
      <div className="font-intergralCF text-[48px] leading-[100%] mt-[72px] mb-[55px] w-[403px] h-[58px] flex items-center justify-center">
        {data?.title}
      </div>
      <div className="flex flex-row gap-5">
        {data?.items &&
          data.items.map((item: Product) => (
            <>
              <div className="flex flex-col">
                <div className="w-[295px] h-[298px] mb-4">
                  <img
                    src={imageMap[item.image]}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-[20px]"
                  />
                </div>
                <span className="mb-2 font-satoshi font-[700] text-[20px]">
                  {capitalizeWords(item.name)}
                </span>

                <div className="flex items-center mb-2">
                  {renderStars(getNumericStars(item.stars))}
                  <span className="ml-2 text-sm text-black/60">
                    {item.stars}
                  </span>
                </div>
                <div className="flex gap-[10px] font-[700] text-[24px] w-[200px] ">
                  <div className="flex-1">
                    ${cacl(item.price, item.discountPercent)}
                  </div>
                  <div className="flex-1 text-black/60 line-through decoration-inherit">
                    {item.discountPercent !== 0 ? "$" + item.price : ""}
                  </div>
                  {item.discountPercent ? (
                    <div className="flex-1 text-red-500 rounded-[62px] bg-red-100 flex justify-center text-[18px] items-center">
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
      <div className="w-[218px] h-[52px] rounded-[62px] border-[0.5px] border-solid border-gray-300 flex justify-center items-center mt-[36px]">
        <button>View All</button>
      </div>
    </div>
  );
};
