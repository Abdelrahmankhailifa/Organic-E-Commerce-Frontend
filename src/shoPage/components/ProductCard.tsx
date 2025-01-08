import React from "react";
import StarRating from "../../homePage/components/Star"; // Replace with your actual path

export interface Product {
  id: number;
  title: string;
  image: string;
  money: string;
  category: string;
  discountedPrice?: string;
}

const ProductCard: React.FC<Product> = ({
  title,
  image,
  money,
  category,
  discountedPrice,
}) => {
  return (
    <div className="flex flex-col items-center relative">
      <div className="relative w-full h-60">
        <img src={image} alt={title} className="w-full h-full object-cover " />
        {discountedPrice && (
          <div className="absolute top-2 right-2 bg-[#8BC34A] rounded-full p-2">
            <span className="text-white text-sm font-bold">Sale</span>
          </div>
        )}
      </div>
      <span className="text-gray-500 text-sm mt-2">{category}</span>
      <span className="font-serif text-lg font-semibold text-center py-2">
        {title}
      </span>
      <div>
        <StarRating />
      </div>
      <div className="flex items-center gap-2 mt-1">
        {discountedPrice ? (
          <>
            <span className="text-gray-400 line-through">{money}</span>
            <span className="text-[#333333] font-bold">{discountedPrice}</span>
          </>
        ) : (
          <span className="text-[#333333] font-bold">{money}</span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
