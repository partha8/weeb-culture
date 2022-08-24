import { v4 as uuid } from "uuid";
import amv from "../../assets/amv.jpg";
import analysis from "../../assets/analysis.jpg";
import jpop from "../../assets/jpop.jpg";
import review from "../../assets/review.jpg";
import top10 from "../../assets/top10.jpg";
import trailers from "../../assets/trailers.jpg";
/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  // {
  //   _id: uuid(),
  //   categoryName: "Trailers",
  //   image: {
  //     src: trailers,
  //     alt: "trailers",
  //   },
  // },
  {
    _id: uuid(),
    categoryName: "AMVs",
    image: {
      src: amv,
      alt: "amv",
    },
  },
  {
    _id: uuid(),
    categoryName: "Reviews",
    image: {
      src: review,
      alt: "review",
    },
  },
  {
    _id: uuid(),
    categoryName: "Top 10 Series",
    image: {
      src: top10,
      alt: "top10",
    },
  },
  {
    _id: uuid(),
    categoryName: "Analysis",
    image: {
      src: analysis,
      alt: "analysis",
    },
  },
  {
    _id: uuid(),
    categoryName: "J-POP",
    image: {
      src: jpop,
      alt: "jpop",
    },
  },
];
