import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

export const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    } else if (i - rating < 1) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-400" />);
    }
  }
  return stars;
};

export const getNumericStars = (starsString: string) => {
  return parseFloat(starsString.split("/")[0]);
};
