import ProductCard, { Product } from "./ProductCard";
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

interface ShopItemsProps {
  products: Product[];
}

const ShopItems: React.FC<ShopItemsProps> = ({ products }) => {
  // Filter products by 'Groceries' category

  return (
    <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-20 mt-10">
      {/* Map through filtered products */}
      {products.map((product) => {
        // Log the product ID to the console for debugging
        console.log(`Rendering product with ID: ${product.id}`);

        return (
          <div key={product.id}>
            {/* Wrap each product card with a Link to the product page */}
            <Link to={`/product/${product.id}`}>
              <ProductCard {...product} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ShopItems;
