import data from "../../data/data.json";
import { DressStyle } from "./dressStyle/DressStyle";
import { NewArrival } from "./newArrival/NewArrival";
import dataVote from "../../data/vote.json";
import { Slider } from "../../assets/images/slider/Slider";
export const MainContent = () => {
  return (
    <div className="w-[1440px] flex flex-col mx-auto">
      <NewArrival data={data.NewArrivals} />
      <NewArrival data={data.TopSelling} />
      <DressStyle />
      <Slider data={dataVote.vote} />
    </div>
  );
};
