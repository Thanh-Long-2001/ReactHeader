import { create } from "zustand";

type ColorFilterState = {
  selectedColor: string[];
  selectColor: (color: string) => void;
};

export const useColorFilterStore = create<ColorFilterState>((set, get) => ({
  selectedColor: [],
  selectColor: (color) => {
    const current = get().selectedColor;
    set({
      selectedColor: current.includes(color)
        ? current.filter((c) => c !== color)
        : [...current, color],
    });
  },
}));
