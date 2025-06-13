import { create } from "zustand";

type SizeFilterState = {
  selectedSize: string[];
  selectSize: (size: string) => void;
};

export const useSizeFilterStore = create<SizeFilterState>((set, get) => ({
  selectedSize: [],
  selectSize: (size) => {
    const current = get().selectedSize;
    set({
      selectedSize: current.includes(size)
        ? current.filter((c) => c !== size)
        : [...current, size],
    });
  },
}));
