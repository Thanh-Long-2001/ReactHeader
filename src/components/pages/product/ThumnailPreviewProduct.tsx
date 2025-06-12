import Image1 from "../../../assets/images/products/men/21d6bcec533545a2b1e10e90b8059bc1bc97eab5.png";
import Image2 from "../../../assets/images/products/men/51c45a78b417beff6f8fa6310534f3755fd23c5a.png";
import Image3 from "../../../assets/images/products/men/52ce3b469d8d7ff6e33f95a574450e07218fc909.png";

export const ThumnailPreviewProduct = (props: {
  onSelect: (img: string) => void;
}) => {
  const { onSelect } = props;
  const images = [Image1, Image2, Image3];
  return (
    <div className="h-full md:max-w-[152px] w-full flex flex-col gap-[14px]">
      {images.map((img, index) => (
        <div
          key={index}
          className="flex-1 bg-cover rounded-[20px] cursor-pointer bg-center"
          style={{ backgroundImage: `url(${img})` }}
          onClick={() => onSelect(img)}
        ></div>
      ))}
    </div>
  );
};
