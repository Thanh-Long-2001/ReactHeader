import { useCategoryFilterStore } from "./useCategoryFilterStore";
import { useColorFilterStore } from "./useSelectedColor";
import { useSizeFilterStore } from "./useSelectedSize";
import { usePriceFilterStore } from "./usePriceFilter";

export const useIsAnyFilterSelected = () => {
  const selectedCategories = useCategoryFilterStore(
    (state) => state.selectedCategories
  );
  const selectedColors = useColorFilterStore((state) => state.selectedColor);
  const selectedSizes = useSizeFilterStore((state) => state.selectedSize);
  const minPrice = usePriceFilterStore((state) => state.minPrice);
  const maxPrice = usePriceFilterStore((state) => state.maxPrice);

  const isCategorySelected = selectedCategories.length > 0;
  const isColorSelected = selectedColors.length > 0;
  const isSizeSelected = selectedSizes.length > 0;
  const isPriceChanged =
    minPrice <= maxPrice &&
    ((minPrice > 0 && maxPrice < 250) || minPrice > 0 || maxPrice < 250);

  return (
    isCategorySelected || isColorSelected || isSizeSelected || isPriceChanged
  );
};
