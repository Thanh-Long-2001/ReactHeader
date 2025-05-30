import Image11 from "../../../assets/images/DressStyle/image 11.png";
import Image12 from "../../../assets/images/DressStyle/image 12.png";
import Image13 from "../../../assets/images/DressStyle/image 13.png";
import Image14 from "../../../assets/images/DressStyle/image 14.png";

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
    <div className="bg-[#f2f2f2] px-[64px] rounded-[40px] w-[1240px] flex flex-col items-center ml-[100px] h-[866px]">
      <span className="text-center text-[48px] font-[700] mb-[64px] mt-[70px]">
        BROWSE BY DRESS STYLE
      </span>
      <div className="grid grid-cols-3 grid-rows-2 gap-5">
        {dressStyles.map((style) => (
          <div
            key={style.id}
            className={`relative rounded-[20px] overflow-hidden h-[289px] cursor-pointer ${
              style.id === 3 || style.id === 2 ? "col-span-2" : "col-span-1"
            }`}
          >
            <img
              src={style.image}
              alt={style.label}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-[25px] left-[36px] text-black font-[Satoshi] text-[36px] bg-transparent px-2 py-1 rounded">
              {style.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
