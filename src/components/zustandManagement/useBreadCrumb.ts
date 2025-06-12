import { create } from "zustand";

type BreadScumbState = {
  breadcrumb: string[];
  handleClick: (index: number) => void;
  setBreadcrumb: (label: string, sublabel?: string) => void;
};

export const useBreadScumbStore = create<BreadScumbState>((set) => ({
  breadcrumb: ["Home"],
  handleClick: (index) =>
    set((state) => ({ breadcrumb: state.breadcrumb.slice(0, index + 1) })),
  setBreadcrumb: (label: string, sublabel?: string) =>
    set((state) => {
      let current = [...state.breadcrumb];
      if (current.length === 1) {
        current.push(label);

        if (sublabel && !current.includes(sublabel)) {
          current.push(sublabel);
        }
      } else if (current.includes(label)) {
        if (sublabel && !current.includes(sublabel)) {
          current = current.slice(0, current.length - 1);
          current.push(sublabel);
        }
      } else if (!current.includes(label) && current.length === 3) {
        current = current.slice(0, current.length - 2);
        current.push(label);
        if (sublabel && !current.includes(sublabel)) {
          current.push(sublabel);
        }
      } else {
        return { breadcrumb: ["Home"] };
      }
      return { breadcrumb: current };
    }),
}));
