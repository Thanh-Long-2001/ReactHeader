import {
  Categories as CategoryMap,
  Colors,
  Sizes,
  type Color,
  type FilterResponse,
  type Size,
} from "../../../utils/constant";
// import { useNavigate } from "react-router-dom";
import FilterImage from "../../../assets/images/Filter.png";
import ArrowMore from "../../../assets/images/arrowMore.png";
import ArrowLess from "../../../assets/images/arrowLess.png";
import Ticker from "../../../assets/images/ticker.png";
import Image1 from "../../../assets/images/products/men/21d6bcec533545a2b1e10e90b8059bc1bc97eab5.png";
import { useCategoryFilterStore } from "../../zustandManagement/useCategoryFilterStore";
import { useBreadScumbStore } from "../../zustandManagement/useBreadCrumb";
import { useColorFilterStore } from "../../zustandManagement/useSelectedColor";
import { useSizeFilterStore } from "../../zustandManagement/useSelectedSize";
import { Slider } from "@mui/material";
import { usePriceFilterStore } from "../../zustandManagement/usePriceFilter";
import { useIsAnyFilterSelected } from "../../zustandManagement/userFilterStore";
import { sendFilterRequest } from "../../../utils/sendRequest";
import { useEffect, useState } from "react";
import { getNumericStars, renderStars } from "../../../utils/renderStars";
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

const listColors: Color[] = [
  Colors.GREEN,
  Colors.RED,
  Colors.YELLOW,
  Colors.ORANGE,
  Colors.BLUE,
  Colors.DARK_BLUE,
  Colors.PURPLE,
  Colors.PINK,
  Colors.WHITE,
  Colors.BLACK,
];

const listSizes: Size[] = [
  Sizes.XX_SMALL,
  Sizes.X_SMALL,
  Sizes.SMALL,
  Sizes.MEDIUM,
  Sizes.LARGE,
  Sizes.XX_LARGE,
  Sizes.X3_LARGE,
  Sizes.X4_LARGE,
];

const imageMap: Record<string, string> = {
  Image1,
};

const capitalizeWords = (str: string) =>
  str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const cacl = (price: number, discount: number) => {
  if (discount !== 0) {
    return Math.floor(price - (price * discount) / 100);
  } else {
    return Math.floor(price);
  }
};

function valuetext(value: number) {
  return `${value}$`;
}

export const Categories = () => {
  const [result, setProduct] = useState<FilterResponse | null>(null);
  const [page, setPage] = useState(1);
  const pageSize = 9;
  const totalPages = result?.total ? Math.ceil(result.total / pageSize) : 1;
  const openCategory = useCategoryFilterStore((state) => state.openCategory);
  const toggleCategory = useCategoryFilterStore(
    (state) => state.toggleCategory
  );

  const getPaginationPages = () => {
    const pages = [];
    const delta = 1;

    // Hiển thị đầu luôn
    pages.push(1);

    if (totalPages <= 5) {
      // Nếu ít trang thì hiển thị hết
      for (let i = 2; i < totalPages; i++) {
        pages.push(i);
      }
    } else {
      let start = Math.max(2, page - delta);
      let end = Math.min(totalPages - 1, page + delta);

      // Nếu đang ở gần đầu
      if (page <= 3) {
        end = 4;
      }

      // Nếu đang ở gần cuối
      if (page >= totalPages - 2) {
        start = totalPages - 3;
      }

      // Nếu khoảng cách giữa 1 và start > 1, thêm ...
      if (start > 2) {
        pages.push("...");
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      // Nếu khoảng cách giữa end và totalPages > 1, thêm ...
      if (end < totalPages - 1) {
        pages.push("...");
      }
    }

    // Luôn hiển thị trang cuối nếu > 1
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const isAnyFilterSelected = useIsAnyFilterSelected();

  const breadcrumb = useBreadScumbStore((state) => state.breadcrumb);

  //Filter categories
  const selectedCategories = useCategoryFilterStore(
    (state) => state.selectedCategories
  );
  const selectCategory = useCategoryFilterStore(
    (state) => state.selectCategory
  );

  const isSelectedSubCategory = useCategoryFilterStore(
    (state) => state.isCategorySelected
  );

  // Filter Price
  const minPrice = usePriceFilterStore((state) => state.minPrice);
  const maxPrice = usePriceFilterStore((state) => state.maxPrice);
  const setPrice = usePriceFilterStore((state) => state.selectPrice);

  const handleChange = (_event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setPrice(newValue[0], newValue[1]);
    }
  };
  // Filter colors
  const selectedColors = useColorFilterStore((state) => state.selectedColor);
  const selectColor = useColorFilterStore((state) => state.selectColor);

  // Filter sizes
  const selectedSizes = useSizeFilterStore((state) => state.selectedSize);
  const selectSize = useSizeFilterStore((state) => state.selectSize);

  const filterPayload = {
    colors: selectedColors,
    sizes: selectedSizes,
    categories: selectedCategories,
    price: [minPrice, maxPrice],
    page: page,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await sendFilterRequest(filterPayload);
        setProduct(result);
      } catch (error) {
        console.error("Error loading product data", error);
      }
    };

    fetchData();
  }, [page]);
  // Fetch API
  const handleApplyFilter = async () => {
    if (!isAnyFilterSelected) return;

    try {
      const result = await sendFilterRequest(filterPayload);
      setProduct(result.data);
    } catch (err) {
      console.error("Error applying filter:", err);
    }
  };
  return (
    <div className="w-full flex flex-col">
      <div className="max-w-310 md:mx-auto w-full">
        <nav className="text-sm text-gray-600 w-full">
          <ul className="flex gap-1 items-center">
            {breadcrumb.map((item, index) => {
              return (
                <li key={index} className="flex items-center gap-1">
                  {index !== 0 && <span>{">"}</span>}
                  <button>{item}</button>
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
                            className={`cursor-pointer ${
                              isSelectedSubCategory(sub)
                                ? " text-blue-600"
                                : "bg-white text-black"
                            }`}
                            onClick={() => selectCategory(item.label, sub)}
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
              <Slider
                getAriaLabel={() => "Price range"}
                value={[minPrice, maxPrice]}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                min={0}
                max={250}
                sx={{
                  color: "black",
                  "& .MuiSlider-thumb": {
                    backgroundColor: "black",
                    "&:hover": {
                      boxShadow: "none", // Tắt bóng đổ khi hover
                      backgroundColor: "black", // Giữ nguyên màu
                    },
                  },
                  "& .MuiSlider-track": {
                    backgroundColor: "black",
                  },
                  "& .MuiSlider-rail": {
                    backgroundColor: "#ccc",
                  },
                }}
              />
            </div>
            <div className="w-full border-t-1 border-black/10"></div>

            <div className="">
              <div
                className="flex justify-between"
                onClick={() => {
                  toggleCategory("Colors");
                }}
              >
                <span>Colors</span>
                <img src={openCategory["Colors"] ? ArrowLess : ArrowMore}></img>
              </div>
              {openCategory["Colors"] && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {listColors.map((color) => {
                    const isSelected = selectedColors.includes(color);
                    return (
                      <div
                        key={color}
                        className={`cursor-pointer rounded-full border border-gray-300 flex justify-center items-center`}
                        onClick={() => selectColor(color)}
                        style={{
                          backgroundColor: color,
                          width: 37,
                          height: 37,
                        }}
                      >
                        {" "}
                        {isSelected && (
                          <span className="text-white text-xl font-bold">
                            <img src={Ticker}></img>
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div className="w-full border-t-1 border-black/10"></div>

            <div className="">
              <div
                className="flex justify-between"
                onClick={() => {
                  toggleCategory("Size");
                }}
              >
                <span>Size</span>
                <img src={openCategory["Size"] ? ArrowLess : ArrowMore}></img>
              </div>

              {openCategory["Size"] && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {listSizes.map((size) => (
                    <div
                      key={size}
                      className={`cursor-pointer px-3 py-1 rounded-full text-sm ${
                        selectedSizes.includes(size)
                          ? "bg-black text-white"
                          : "bg-gray-100 text-black"
                      }`}
                      onClick={() => selectSize(size)}
                    >
                      {size}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="w-full border-t-1 border-black/10"></div>

            <button
              onClick={handleApplyFilter}
              className={`py-4 px-13.5 rounded-[62px] transition-colors duration-200 ${
                isAnyFilterSelected
                  ? "bg-black text-white"
                  : "bg-gray-300 text-gray-500"
              }`}
            >
              Apply Filter
            </button>
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap gap-x-5 gap-y-8 ml-5 mb-8">
              {result?.data &&
                result?.data?.map((item) => (
                  <>
                    <div
                      className="flex flex-col cursor-pointer max-w-[295px] w-full"
                      key={item.id}
                    >
                      <div className="max-w-73.75 max-h-74.5 mb-4 max-md:w-[198px] max-md:h-50">
                        <img
                          src={imageMap[item.image]}
                          alt={item.name}
                          className="w-full h-full object-cover rounded-[20px] hover:-translate-y-2 hover:transition-transform duration-300"
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
                      <div className="flex gap-2.5 max-md:gap-1.25 font-[700] md:text-2xl w-50 max-md:w-36 text-xl max-md:text-xl">
                        <div className="flex-1">
                          ${cacl(item.price, item.discountPercent)}
                        </div>
                        <div className="flex-1 text-black/60 line-through decoration-inherit">
                          {item.discountPercent !== 0 ? "$" + item.price : ""}
                        </div>
                        {item.discountPercent ? (
                          <div className="flex-1 text-red-500 rounded-[62px] bg-red-100 flex justify-center text-lg max-md:text-[10px] items-center max-md:font-[500] max-md:py-1.5 max-md:px-3.5">
                            <div className="max-md:w-6.5 max-md:h-3.5">
                              {item.discountPercent
                                ? "-" + item.discountPercent + "%"
                                : ""}
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </>
                ))}
            </div>
            <div className="w-full pl-5">
              <div className=" border-t-1 border-amber-200"></div>
            </div>
            <div className=" gap-2 mt-5 pl-5">
              <div className="flex justify-between items-center">
                <button
                  disabled={page === 1}
                  onClick={() => setPage((p) => Math.max(p - 1, 1))}
                  className="px-4 py-2 border rounded disabled:opacity-50"
                >
                  Previous
                </button>

                <div>
                  {getPaginationPages().map((p, i) => (
                    <button
                      key={i}
                      disabled={p === "..."}
                      onClick={() => typeof p === "number" && setPage(p)}
                      className={`px-4 py-2 rounded  ${
                        p === page ? "bg-[#f0eeed]" : "bg-white "
                      } ${p === "..." ? "cursor-default" : ""}`}
                    >
                      {p}
                    </button>
                  ))}
                </div>

                <button
                  disabled={page === totalPages}
                  onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                  className="px-4 py-2 border rounded disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
