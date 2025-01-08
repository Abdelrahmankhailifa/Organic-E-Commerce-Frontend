import React from "react";
import { useNavigate } from "react-router-dom";
import StarRating from "../../homePage/components/Star";

export interface Products {
  id: number;
  title: string;
  image: string;
  money: string;
  category: string;
}

export interface TrendingProduct {
  id: number;
  title: string;
  image: string;
  money: string;
  category: string;

  // Add this for the sale price
}

const RelatedProducts: React.FC<TrendingProduct> = ({
  id,
  title,
  money,
  image,
  category,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col justify-center items-center relative "
      onClick={() => {
        console.log("ID: ", id);
        navigate(`/product/${id}`);
      }}
    >
      <img
        src={image}
        alt="Description of image"
        className="max-w-xs max-h-80 cursor-pointer"
      />

      <span className="text-gray-500 p-4">{category}</span>
      <span className="font-serif text-xl font-semibold cursor-pointer">
        {title}
      </span>
      <span className="p-2">
        <StarRating />
      </span>
      <div className="flex items-center gap-2">
        <span className="text-gray-900 font-bold">{money}</span>
      </div>
    </div>
  );
};

export default RelatedProducts;
