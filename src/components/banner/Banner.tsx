export const Banner = () => {
  return (
    <div className="flex w-full bg-[#000] h-[38px] max-md:h-[34px] justify-center">
      <div className="flex justify-center items-center text-[#fff] w-max-[351px] font-satoshi md:text-sm text-xs">
        <span className="text-[#fff] font-[400]">
          Sign up and get 20% off to your first order.{" "}
          <span className="underline font-[500]">Sign Up Now</span>
        </span>
      </div>
    </div>
  );
};
