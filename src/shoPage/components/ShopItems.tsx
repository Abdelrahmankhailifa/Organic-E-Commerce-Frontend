import React, { useEffect, useState } from "react";
import ProductCard, { Product } from "./ProductCard";
import { Link } from "react-router-dom";

interface ShopItemsProps {
  products: Product[];
  sortOrder: "highToLow" | "lowToHigh" | "default";
}

const ShopItems: React.FC<ShopItemsProps> = ({ products, sortOrder }) => {
  const [sortedProducts, setSortedProducts] = useState<Product[]>([]);

  useEffect(() => {
    let sorted = [...products];

    const getNumericPrice = (price: number | string) => {
      if (typeof price === "number") return price;
      return Number(price.replace(/[^0-9.]/g, ""));
    };

    if (sortOrder === "highToLow") {
      sorted.sort(
        (a, b) => getNumericPrice(b.money) - getNumericPrice(a.money)
      );
    } else if (sortOrder === "lowToHigh") {
      sorted.sort(
        (a, b) => getNumericPrice(a.money) - getNumericPrice(b.money)
      );
    }

    setSortedProducts(sorted);
  }, [sortOrder, products]);

  return (
    <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-20 mt-10">
      {sortedProducts.map((product) => (
        <div key={product.id}>
          <Link to={`/product/${product.id}`}>
            <ProductCard {...product} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ShopItems;
