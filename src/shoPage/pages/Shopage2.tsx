import { useState } from "react";

import SearchCol from "../components/SearchCol";
import Credits from "../../homePage/components/Credits";
import DefaultDropdown from "../components/DefaultDropdown";
import ProductCard, { Product } from "../components/ProductCard";
import Pagination from "../components/Pagination";

function Shopage2() {
  const products: Product[] = [
    {
      id: 10,
      title: "Organic Face Scrub",
      image: "/assets/face-wash.jpg",
      money: "£35.00",
      category: "Groceries",
    },
    {
      id: 11,
      title: "Pulses From Organic Farm",
      image: "/assets/pulses.jpg",
      money: "£15.00",
      category: "Groceries",
    },
    {
      id: 12,
      title: "Wheat From Organic Farms",
      image: "/assets/wheat-768x768.jpg",
      money: "£34.00",
      category: "Groceries",
    },
  ];

  return (
    <div className="flex flex-col bg-[#F8F6F3] w-full">
      <div className="flex flex-row w-full">
        <div className="flex flex-col ">
          <div className="flex">
            <SearchCol />
          </div>
        </div>
        <div className="flex flex-col h-fit justify-start items-start slef-start w-full mt-12 pl-16">
          <div className="flex space-x-1">
            <a href="/" className="text-[#77779B] cursor-pointer ">
              Home
            </a>
            <span className="text-[#77779B] ">/</span>
            <a href="/home/shop/" className="text-[#77779B] cursor-pointer ">
              Shop
            </a>
            <span className="text-[#77779B] ">/</span>
            <span className="text-[#77779B] ">Page 2</span>
          </div>
          <div className="flex mt-5 mb-16">
            <span className="text-[#8EC44F]  text-5xl font-serif font-semibold">
              Shop
            </span>
          </div>
          <div className="flex space-x-[47%] w-full ">
            <span className="text-[#333333] self-center">
              Showing 10–12 of 12 results
            </span>
            <DefaultDropdown />
          </div>

          <div className="flex w-[86%] mt-10">
            <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-20">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
          <div className="flex">
            <Pagination />
          </div>
        </div>
      </div>

      <div className="flex w-full">
        <Credits />
      </div>
    </div>
  );
}

export default Shopage2;
