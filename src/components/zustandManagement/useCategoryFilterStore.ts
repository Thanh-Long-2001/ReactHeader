// stores/useCategoryFilterStore.ts
import { create } from "zustand";

type CategoryFilterState = {
  openCategory: Record<string, boolean>;
  toggleCategory: (category: string) => void;
  resetCategories: () => void;
};

export const useCategoryFilterStore = create<CategoryFilterState>((set) => ({
  openCategory: {},
  toggleCategory: (category) =>
    set((state) => ({
      openCategory: {
        ...state.openCategory,
        [category]: !state.openCategory[category],
      },
    })),
  resetCategories: () => set({ openCategory: {} }),
}));
