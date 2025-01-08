import StarRating from "./Star";
import React from "react";
import { useNavigate } from "react-router-dom";

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

const TrendingsProduct: React.FC<TrendingProduct> = ({
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

function TrendingProducts() {
  const products: (Products & { discountedPrice?: string })[] = [
    {
      id: 1,
      image: "/assets/coffee-asorted.jpg",
      title: "Assorted Coffee",
      money: "£35.00",
      category: "Groceries",
    },
    {
      id: 2,
      image: "/assets/orage-juice-kariz.jpg",
      title: "Fresh Orange Juice",
      money: "£34.00",
      discountedPrice: "£25.00",
      category: "Juice",
    },
    {
      id: 3,
      image: "/assets/sanitizer.jpg",
      title: "Hand Sanitizer",
      money: "£15.00",
      category: "Groceries",
    },
    {
      id: 4,
      image: "/assets/red-chillies.jpg",
      title: "Handpicked Red Chillies",
      money: "£19.00",
      category: "Groceries",
    },
  ];

  return (
    <div className="flex flex-col">
      <span className="flex font-serif text-4xl font-semibold p-5 justify-center">
        Trending Products
      </span>
      <div className="flex justify-center p-5">
        <img
          src="/assets/logo-leaf-new.png"
          alt="Description of image"
          className="max-w-xl max-h-fit"
        />
      </div>
      <div className="flex flex-row space-x-6 mt-6">
        {products.map((product, index) => (
          <TrendingsProduct
            key={index}
            id={product.id}
            title={product.title}
            money={product.money}
            image={product.image}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
}
export default TrendingProducts;
