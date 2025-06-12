import { Categories as CategoryMap } from "../../../utils/constant";
// import { useNavigate } from "react-router-dom";
import FilterImage from "../../../assets/images/Filter.png";
import ArrowMore from "../../../assets/images/arrowMore.png";
import ArrowLess from "../../../assets/images/arrowLess.png";
import { useCategoryFilterStore } from "../../zustandManagement/useCategoryFilterStore";
import { useBreadScumbStore } from "../../zustandManagement/useBreadCrumb";

const categories = [
  {
    label: CategoryMap.TSHIRT,
    subCategories: ["Plain", "Graphic", "Oversized"],
  },
  {
    label: CategoryMap.JEANS,
    subCategories: ["Slim Fit", "Regular Fit", "Wide Leg"],
  },
  {
    label: CategoryMap.HOODIE,
    subCategories: ["Zipper", "Pullover", "Cropped"],
  },
  {
    label: CategoryMap.SHORTS,
    subCategories: ["Denim", "Chino", "Running"],
  },
  {
    label: CategoryMap.SHIRTS,
    subCategories: ["Formal", "Casual", "Linen"],
  },
];

// const listColors: Color[] = [
//   Colors.GREEN,
//   Colors.RED,
//   Colors.YELLOW,
//   Colors.ORANGE,
//   Colors.DARK_BLUE,
//   Colors.PURPLE,
//   Colors.PINK,
//   Colors.WHITE,
//   Colors.BLACK,
// ];

export const Categories = () => {
  const openCategory = useCategoryFilterStore((state) => state.openCategory);
  const toggleCategory = useCategoryFilterStore(
    (state) => state.toggleCategory
  );
  const resetCategories = useCategoryFilterStore(
    (state) => state.resetCategories
  );

  const breadcrumb = useBreadScumbStore((state) => state.breadcrumb);
  const handleClick = useBreadScumbStore((state) => state.handleClick);
  const setBreadcrumb = useBreadScumbStore((state) => state.setBreadcrumb);

  // const navigate = useNavigate();

  // const handleSelect = (gender: Gender, value: string) => {
  //   setBreadcrumb([...breadcrumb, gender, value]);
  //   navigate(`/categories/${gender.toLowerCase()}/${value.toLowerCase()}`);
  // };
  return (
    <div className="w-full flex flex-col">
      <div className="max-w-310 md:mx-auto w-full">
        <nav className="text-sm text-gray-600 w-full">
          <ul className="flex gap-1 items-center">
            {breadcrumb.map((item, index) => {
              const isDisabled =
                breadcrumb.length === 3 &&
                (index === breadcrumb.length - 1 ||
                  index === breadcrumb.length - 2);
              return (
                <li key={index} className="flex items-center gap-1">
                  {index !== 0 && <span>{">"}</span>}
                  <button
                    onClick={() => {
                      if (isDisabled) return;
                      handleClick(index);
                      // setBreadcrumb(item);
                      if (index === 0) {
                        console.log(index);
                        resetCategories();
                      } else {
                        console.log(item);
                        // toggleCategory(item);
                      }
                    }}
                    className={`${
                      isDisabled
                        ? "text-gray-400 cursor-not-allowed"
                        : "hover:underline text-black"
                    }`}
                  >
                    {item}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="max-w-310 md:mx-auto w-full flex">
          <div className="max-w-[295px] w-full h-305 border-1 border-black/10 flex flex-col gap-6 p-6">
            <div className="flex justify-between">
              <span>Filters</span>
              <img src={FilterImage}></img>
            </div>
            <div className="w-full border-t-1 border-black/10"></div>
            <div className="">
              <ul className="flex flex-col gap-5">
                {categories.map((item) => (
                  <li key={item.label}>
                    <div
                      className="w-full flex justify-between text-base"
                      onClick={() => {
                        toggleCategory(item.label);
                        // setBreadcrumb(item.label);
                      }}
                    >
                      <span>{item.label}</span>
                      <img
                        src={openCategory[item.label] ? ArrowLess : ArrowMore}
                        alt="toggle"
                      ></img>
                    </div>
                    {openCategory[item.label] && (
                      <div className="pl-4 mt-2 text-sm text-gray-600 space-y-1">
                        {item.subCategories.map((sub) => (
                          <div
                            key={sub}
                            onClick={() => setBreadcrumb(item.label, sub)}
                            className="cursor-pointer hover:underline"
                          >
                            {sub}
                          </div>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full border-t-1 border-black/10"></div>

            <div className="">
              <div className="flex justify-between">
                <span>Price</span>
                <img src={ArrowMore}></img>
              </div>
            </div>
            <div className="w-full border-t-1 border-black/10"></div>

            <div className="">
              <div className="flex justify-between">
                <span>Colors</span>
                <img src={ArrowMore}></img>
              </div>
            </div>
            <div className="w-full border-t-1 border-black/10"></div>

            <div className="">
              <div className="flex justify-between">
                <span>Size</span>
                <img src={ArrowMore}></img>
              </div>
            </div>
            <div className="w-full border-t-1 border-black/10"></div>

            <div className="">
              <div className="flex justify-between">
                <span>DressStyle</span>
                <img src={ArrowMore}></img>
              </div>
            </div>

            <button className="py-4 px-13.5 bg-black text-white rounded-[62px]">
              Apply Filter
            </button>
          </div>
          <div className="flex-1 bg-amber-200"></div>
        </div>
      </div>
    </div>
  );
};
