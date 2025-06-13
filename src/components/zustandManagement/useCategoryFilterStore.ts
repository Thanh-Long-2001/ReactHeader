// stores/useCategoryFilterStore.ts
import { create } from "zustand";

type CategoryFilterState = {
  openCategory: Record<string, boolean>;
  selectedCategories: SelectedCategory[];
  toggleCategory: (category: string) => void;
  selectCategory: (label: string, sublabel: string) => void;
  isCategorySelected: (sublabel: string) => boolean;
  resetCategories: () => void;
};

export type SelectedCategory = {
  label: string;
  subLabels: string[];
};

export const useCategoryFilterStore = create<CategoryFilterState>(
  (set, get) => ({
    selectedCategories: [],
    openCategory: {},
    selectCategory: (label: string, sub: string) => {
      const selected = get().selectedCategories;
      const existedLabel = selected.find((item) => item.label === label);
      let updated: SelectedCategory[];

      if (existedLabel) {
        const existedSub = existedLabel.subLabels.includes(sub);
        const newSubLabels = existedSub
          ? existedLabel.subLabels.filter((s) => s !== sub)
          : [...existedLabel.subLabels, sub];

        if (newSubLabels.length === 0) {
          updated = selected.filter((item) => item.label !== label);
        } else {
          updated = selected.map((item) =>
            item.label === label ? { ...item, subLabels: newSubLabels } : item
          );
        }
      } else {
        updated = [...selected, { label, subLabels: [sub] }];
      }

      set({ selectedCategories: updated });
    },
    toggleCategory: (category) =>
      set((state) => ({
        openCategory: {
          ...state.openCategory,
          [category]: !state.openCategory[category],
        },
      })),
    resetCategories: () => set({ openCategory: {} }),
    isCategorySelected: (sublabel: string) => {
      const selected = get().selectedCategories;
      const allSubLabels = selected?.reduce((acc, item) => {
        return [...acc, ...item.subLabels];
      }, [] as string[]);
      return allSubLabels.includes(sublabel);
    },
  })
);
