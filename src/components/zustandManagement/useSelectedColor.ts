// import { create } from "zustand";

// type BreadScumbState = {
//   breadcrumb: string[];
//   handleClick: (index: number) => void;
//   setBreadcrumb: (label: string) => void;
// };

// export const useBreadScumbStore = create<BreadScumbState>((set) => ({
//   breadcrumb: ["Home"],
//   handleClick: (index) =>
//     set((state) => ({ breadcrumb: state.breadcrumb.slice(0, index + 1) })),
//   setBreadcrumb: (label: string) =>
//     set((state) => {
//       const current = [...state.breadcrumb];
//       if (current.length === 3 && !current.includes(label)) {
//         current[2] = label;
//       } else if (!current.includes(label)) {
//         current.push(label);
//       } else {
//         return { breadcrumb: ["Home"] };
//       }
//       return { breadcrumb: current };
//     }),
// }));
