import { products } from "../../data/productsData"; // Adjust the path as necessary
import ShopItems from "../../shoPage/components/ShopItems"; // Adjust the path as necessary
import SearchCol from "../../shoPage/components/SearchCol"; // Adjust the path as necessary
import Credits from "../../homePage/components/Credits"; // Adjust the path as necessary
import DefaultDropdown from "../../shoPage/components/DefaultDropdown"; // Adjust the path as necessary
import PaginationGrocery from "../components/PaginationGrocery";

function Shopage2() {
  const filteredProducts = products.filter(
    (product) => product.category === "Groceries"
  );
  const firstPageProducts = filteredProducts.slice(9);

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
            <a
              href="/home/product-category/groceries/"
              className="text-[#77779B] cursor-pointer "
            >
              Groceries
            </a>
            <span className="text-[#77779B] ">/</span>
            <span className="text-[#77779B] ">Page 2</span>
          </div>
          <div className="flex mt-5 mb-16">
            <span className="text-[#8EC44F]  text-5xl font-serif font-semibold">
              Groceries
            </span>
          </div>
          <div className="flex space-x-[47%] w-full ">
            <span className="text-[#333333] self-center">
              Showing 10–10 of 10 results
            </span>
            <DefaultDropdown />
          </div>

          <div className="flex w-[86%] mt-10">
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
}

export default Shopage2;
