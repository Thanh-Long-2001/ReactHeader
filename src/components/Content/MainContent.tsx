import data from "../../data/data.json";
import { DressStyle } from "./DressStyle/DressStyle";
import { NewArrival } from "./NewArrival/NewArrival";
import dataVote from "../../data/vote.json";
import { Slider } from "../../assets/images/Slider/Slider";
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
