import React from "react";
import { Product, products } from "../../data/productsData";
import ShopItems from "../../shoPage/components/ShopItems";
import SearchCol from "../../shoPage/components/SearchCol";
import Credits from "../../homePage/components/Credits";
import DefaultDropdown from "../../shoPage/components/DefaultDropdown";
import Pagination from "../../shoPage/components/Pagination";
import { useSearchParams } from "react-router-dom";

const GroceryPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Get URL parameters or set defaults
  const currentPage = Number(searchParams.get("page")) || 1;
  const sortOrder =
    (searchParams.get("sort") as "default" | "highToLow" | "lowToHigh") ||
    "default";

  // First filter the products
  const filteredProducts = products.filter(
    (product) => product.category === "Groceries"
  );

  const totalProducts = filteredProducts.length;
  const productsPerPage = 9;

  // Sorting function
  const sortProducts = (
    items: Product[],
    order: "default" | "highToLow" | "lowToHigh"
  ): Product[] => {
    let sortedItems = [...items];

    const getNumericPrice = (price: number | string) =>
      typeof price === "number" ? price : Number(price.replace(/[^0-9.]/g, ""));

    if (order === "highToLow") {
      sortedItems.sort(
        (a, b) => getNumericPrice(b.money) - getNumericPrice(a.money)
      );
    } else if (order === "lowToHigh") {
      sortedItems.sort(
        (a, b) => getNumericPrice(a.money) - getNumericPrice(b.money)
      );
    }

    return sortedItems;
  };

  // Sort the filtered products
  const sortedProducts = sortProducts(filteredProducts, sortOrder);

  // Then paginate the sorted results
  const startIdx = (currentPage - 1) * productsPerPage;
  const endIdx = startIdx + productsPerPage;
  const paginatedProducts = sortedProducts.slice(startIdx, endIdx);

  // Handle sorting changes
  const handleSortChange = (order: "default" | "highToLow" | "lowToHigh") => {
    window.location.href = `/home/product-category/groceries?page=1&sort=${order}`;
  };

  // Handle pagination changes
  const handlePageChange = (page: number) => {
    window.location.href = `/home/product-category/groceries?page=${page}${
      sortOrder !== "default" ? `&sort=${sortOrder}` : ""
    }`;
  };

  return (
    <div className="flex flex-col bg-[#F8F6F3] w-full">
      <div className="flex flex-row w-full">
        <div className="flex flex-col">
          <div className="flex">
            <SearchCol />
          </div>
        </div>
        <div className="flex flex-col h-fit justify-start items-start self-start w-full mt-12 pl-16">
          <div className="flex space-x-1">
            <a href="/" className="text-[#77779B] cursor-pointer">
              Home
            </a>
            <span className="text-[#77779B]">/</span>
            <a
              href="/home/product-category/groceries"
              className="text-[#77779B] cursor-pointer"
            >
              Groceries
            </a>
            <span className="text-[#77779B]">/</span>
            <span className="text-[#77779B]">Page {currentPage}</span>
          </div>
          <div className="flex mt-5 mb-16">
            <span className="text-[#8EC44F] text-5xl font-serif font-semibold">
              Groceries
            </span>
          </div>
          <div className="flex space-x-[47%] w-full">
            <span className="text-[#333333] self-center">
              Showing {paginatedProducts.length} of {totalProducts} results
            </span>
            <DefaultDropdown onSort={handleSortChange} />
          </div>

          <div className="flex w-[86%] mt-10">
            <ShopItems products={paginatedProducts} sortOrder={sortOrder} />
          </div>

          <div className="flex">
            <Pagination
              totalProducts={totalProducts}
              productsPerPage={productsPerPage}
              currentPage={currentPage}
              setCurrentPage={handlePageChange}
            />
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
