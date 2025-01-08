import StarRating from "./Star";
import React from "react";

export interface Products {
  title: string;
  image: string;
  money: string;
}

export interface BestSellersProduct {
  title: string;
  image: string;
  money: string;
  isLast?: boolean;
  discountedPrice?: string; // Add this for the sale price
}

const BestSellersProducts: React.FC<BestSellersProduct> = ({
  title,
  money,
  image,
  isLast,
  discountedPrice,
}) => (
  <div className="flex flex-col justify-center items-center relative ">
    <img
      src={image}
      alt="Description of image"
      className="max-w-xs max-h-80 cursor-pointer"
    />
    {isLast && (
      <div className="absolute top-4 right-4 w-16 h-16 bg-greenGray rounded-full flex items-center justify-center ">
        <span className="text-white font-bold text-sm">SALE</span>
      </div>
    )}
    <span className="text-gray-500 p-4">Groceries</span>
    <span className="font-serif text-xl font-semibold cursor-pointer">
      {title}
    </span>
    <span className="p-2">
      <StarRating />
    </span>
    <div className="flex items-center gap-2">
      {isLast ? (
        <>
          <span className="text-gray-400 line-through">{money}</span>
          <span className="text-gray-900 font-bold">{discountedPrice}</span>
        </>
      ) : (
        <span className="text-gray-900 font-bold">{money}</span>
      )}
    </div>
  </div>
);

function BestSellers() {
  const products: (Products & { discountedPrice?: string })[] = [
    {
      image: "/assets/coffee-asorted.jpg",
      title: "Assorted Coffee",
      money: "£35.00",
    },
    {
      image: "/assets/sanitizer.jpg",
      title: "Hand Sanitizer",
      money: "£15.00",
    },
    {
      image: "/assets/red-chillies.jpg",
      title: "Handpicked Red Chillies",
      money: "£19.00",
    },
    {
      image: "/assets/edible-oil.jpg",
      title: "Natural Extracted Edible Oil",
      money: "£34.00",
      discountedPrice: "£25.00",
    },
  ];

  return (
    <div className="flex flex-col">
      <span className="flex font-serif text-4xl font-semibold p-5 justify-center">
        Best Selling Products
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
          <BestSellersProducts
            key={index}
            title={product.title}
            money={product.money}
            image={product.image}
            isLast={index === products.length - 1}
            discountedPrice={product.discountedPrice}
          />
        ))}
      </div>
    </div>
  );
}
export default BestSellers;
