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
  DARK_BLUE: "dark_blue",
  PURPLE: "purple",
  PINK: "pink",
  WHITE: "white",
  BLACK: "black",
};
export type Color = (typeof Colors)[keyof typeof Colors];
