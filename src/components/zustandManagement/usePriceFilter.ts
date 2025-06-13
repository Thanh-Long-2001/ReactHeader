import { create } from "zustand";

type PriceFilterState = {
  minPrice: number;
  maxPrice: number;
  selectPrice: (min: number, max: number) => void;
};

export const usePriceFilterStore = create<PriceFilterState>((set) => ({
  minPrice: 0,
  maxPrice: 250,
  selectPrice: (min, max) => {
    set({
      minPrice: min,
      maxPrice: max,
    });
  },
}));
