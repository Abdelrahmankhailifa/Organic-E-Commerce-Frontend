import { products } from "../../data/productsData";

import SearchCol from "../components/SearchCol";
import Credits from "../../homePage/components/Credits";
import DefaultDropdown from "../components/DefaultDropdown";
import ShopItems from "../components/ShopItems";
import Pagination from "../components/Pagination";

function Shop() {
  const firstPageProducts = products.slice(0, 9);

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
            <span className="text-[#77779B] ">Shop</span>
          </div>
          <div className="flex mt-5 mb-16">
            <span className="text-[#8EC44F]  text-5xl font-serif font-semibold">
              Shop
            </span>
          </div>
          <div className="flex space-x-[47%] w-full ">
            <span className="text-[#333333] self-center">
              Showing 1–9 of 12 results
            </span>
            <DefaultDropdown />
          </div>
          <div className="flex w-[84%]">
            <ShopItems products={firstPageProducts} />
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

export default Shop;
