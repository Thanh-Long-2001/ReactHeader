import data from "../../data/data.json";
import { DressStyle } from "./dressStyle/DressStyle";
import { NewArrival } from "./newArrival/NewArrival";
import dataVote from "../../data/vote.json";
import { Slider } from "../../assets/images/slider/Slider";
export const MainContent = () => {
  return (
    <div className="w-[1440px] flex flex-col mx-auto max-md:w-full">
      <NewArrival data={data.NewArrivals} />
      <div className="md:w-[1240px] md:ml-25 w-full h-1px max-md:px-4">
        <div className="w-full h-full border-t-[1px] border-gray-300"></div>
      </div>
      <NewArrival data={data.TopSelling} />
      <DressStyle />
      <Slider data={dataVote.vote} />
    </div>
  );
};
