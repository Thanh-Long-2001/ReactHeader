export const Genders = {
  MEN: "Men",
  WOMEN: "Women",
};
export type Gender = (typeof Genders)[keyof typeof Genders];

export const Categories = {
  TSHIRT: "T-shirts",
  JEANS: "Jeans",
  SHIRTS: "Shirts",
  SHORTS: "Shorts",
  HOODIE: "Hoodie",
};
export type Category = (typeof Categories)[keyof typeof Categories];

export const Colors = {
  GREEN: "green",
  RED: "red",
  BLUE: "blue",
  YELLOW: "yellow",
  ORANGE: "orange",
  DARK_BLUE: "darkblue",
  PURPLE: "purple",
  PINK: "pink",
  WHITE: "white",
  BLACK: "black",
};
export type Color = (typeof Colors)[keyof typeof Colors];

export const Sizes = {
  XX_SMALL: "XX-Small",
  X_SMALL: "X-Small",
  SMALL: "Small",
  MEDIUM: "Medium",
  LARGE: "Large",
  X_LARGE: "X-Large",
  XX_LARGE: "XX-Large",
  X3_LARGE: "3X-Large",
  X4_LARGE: "4X-Large",
};

export type Size = (typeof Sizes)[keyof typeof Sizes];
interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  discountPercent: number;
  stars: string;
}

export interface FilterResponse {
  total: number;
  data: Product[];
}

export interface FilterPayload {
  colors: string[];
  sizes: string[];
  categories: { label: string; sub: string[] }[];
  price: [number, number];
  page: number;
}
