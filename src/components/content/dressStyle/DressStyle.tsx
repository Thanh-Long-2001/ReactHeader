import Image11 from "../../../assets/images/dressStyle/image 11.png";
import Image12 from "../../../assets/images/dressStyle/image 12.png";
import Image13 from "../../../assets/images/dressStyle/image 13.png";
import Image14 from "../../../assets/images/dressStyle/image 14.png";

const dressStyles = [
  {
    id: 1,
    label: "Casual",
    image: Image11,
  },
  {
    id: 2,
    label: "Formal",
    image: Image12,
  },
  {
    id: 3,
    label: "Party",
    image: Image13,
  },
  {
    id: 4,
    label: "Gym",
    image: Image14,
  },
];

export const DressStyle = () => {
  return (
    <div className="  md:max-w-[1240px] w-full max-md:px-4 md:h-[866px] h-[975px]">
      <div className="w-full h-full md:px-[64px] px-[24px] flex flex-col items-center bg-[#f2f2f2] rounded-[40px] max-md:rounded-[20px]">
        <div className="md:text-[48px] text-[32px] font-intergralCF md:mb-[64px] md:mt-[70px] mt-10 md:h-[58px] h-[72px] w-[687px] max-md:text-wrap max-md:w-[246px] ">
          <span className="flex text-center max-md:leading-9">
            BROWSE BY DRESS STYLE
          </span>
        </div>
        <div className="grid md:grid-cols-3 md:grid-rows-2 md:gap-5 gap-y-4 max-md:grid-cols-1 max-md:mt-7">
          {dressStyles.map((style) => (
            <div
              key={style.id}
              className={`relative rounded-[20px] overflow-hidden md:h-[289px] h-[190px] max-md:w-full cursor-pointer ${
                style.id === 3 || style.id === 2
                  ? "md:col-span-2"
                  : "md:col-span-1"
              }`}
            >
              <img
                src={style.image}
                alt={style.label}
                className="w-full h-full object-cover"
              />
              <div className="absolute md:top-[25px] md:left-[36px] top-4 left-6 text-black font-satoshi md:text-[36px] bg-transparent md:px-2 md:py-1 rounded text-[24px]">
                {style.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
