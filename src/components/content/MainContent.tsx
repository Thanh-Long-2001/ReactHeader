import data from "../../data/data.json";
import { DressStyle } from "./dressStyle/DressStyle";
import { NewArrival } from "./newArrival/NewArrival";
import dataVote from "../../data/vote.json";
import { Slider } from "../../assets/images/slider/Slider";
export const MainContent = () => {
  return (
    <div className="md:max-w-[1440px] flex flex-col items-center mx-auto w-full">
      <NewArrival data={data.NewArrivals} />
      <div className="md:max-w-[1240px] w-full h-1px max-md:px-4">
        <div className="w-full h-full border-t-[1px] border-gray-300"></div>
      </div>
      <NewArrival data={data.TopSelling} />
      <DressStyle />
      <Slider data={dataVote.vote} />
    </div>
  );
};
