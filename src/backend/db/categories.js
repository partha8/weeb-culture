import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Trailers",
  },
  {
    _id: uuid(),
    categoryName: "AMVs",
  },
  {
    _id: uuid(),
    categoryName: "Reviews",
  },
  {
    _id: uuid(),
    categoryName: "Top 10 Series",
  },
  {
    _id: uuid(),
    categoryName: "Analysis",
  },
  {
    _id: uuid(),
    categoryName: "J-POP",
  },
];
