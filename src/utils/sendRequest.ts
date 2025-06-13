import type { SelectedCategory } from "../components/zustandManagement/useCategoryFilterStore";

export const sendFilterRequest = async (payload: {
  colors: string[];
  sizes: string[];
  categories: SelectedCategory[];
  price: number[];
  page?: number;
}) => {
  const response = await fetch("/api/filter", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Failed to apply filter");
  }

  const result = await response.json();
  return result;
};
