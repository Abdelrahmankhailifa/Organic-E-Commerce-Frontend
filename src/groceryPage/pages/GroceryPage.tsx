import React from "react";
import { products } from "../../data/productsData"; // Adjust the path as necessary
import ShopItems from "../../shoPage/components/ShopItems"; // Adjust the path as necessary
import SearchCol from "../../shoPage/components/SearchCol"; // Adjust the path as necessary
import Credits from "../../homePage/components/Credits"; // Adjust the path as necessary
import DefaultDropdown from "../../shoPage/components/DefaultDropdown"; // Adjust the path as necessary
import PaginationGrocery from "../components/PaginationGrocery";

const GroceryPage: React.FC = () => {
  const filteredProducts = products.filter(
    (product) => product.category === "Groceries"
  );
  const firstPageProducts = filteredProducts.slice(0, 9);
  return (
    <div className="flex flex-col bg-[#F8F6F3] w-full">
      <div className="flex flex-row w-full">
        <div className="flex flex-col">
          <div className="flex">
            <SearchCol />
          </div>
        </div>
        <div className="flex flex-col h-fit justify-start items-start w-full mt-12 pl-16">
          <div className="flex space-x-1">
            <a href="/" className="text-[#77779B] cursor-pointer ">
              Home
            </a>
            <span className="text-[#77779B] ">/</span>
            <span className="text-[#77779B] ">Groceries</span>
          </div>
          <div className="flex mt-5 mb-16">
            <span className="text-[#8EC44F] text-5xl font-serif font-semibold">
              Groceries
            </span>
          </div>
          <div className="flex w-[84%] mb-10 text-[#333333]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            dignissim, velit et luctus interdum, est quam scelerisque tellus,
            eget luctus mi diam vitae erat. Praesent porttitor lacus vitae
            dictum posuere. Suspendisse elementum metus ac dolor tincidunt, eu
            imperdiet nisi dictum.
          </div>
          <div className="flex space-x-[47%] w-full ">
            <span className="text-[#333333] self-center">
              Showing 1–9 of 10 results
            </span>
            <DefaultDropdown />
          </div>
          <div className="flex w-[84%]">
            {/* Pass products to ShopItems */}
            <ShopItems products={firstPageProducts} />
          </div>
          <div className="flex">
            <PaginationGrocery />
          </div>
        </div>
      </div>

      <div className="flex w-full">
        <Credits />
      </div>
    </div>
  );
};

export default GroceryPage;
