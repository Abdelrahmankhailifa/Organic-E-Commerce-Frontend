import { FaChevronRight } from "react-icons/fa";
import { PriceRangeSlider } from "./PriceRangeSlider";
import { useState } from "react";
import ColSales from "./ColSales";
import { useNavigate } from "react-router-dom";
import { products } from "../../data/productsData"; // Adjust the import path as needed

function SearchCol() {
  const [priceRange, setPriceRange] = useState([10, 40]); // Default range [min, max]
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Function to handle slider value changes

  // Function to handle search input changes
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Function to handle search submission
  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();

    // Find the product that matches the search term
    const foundProduct = products.find((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (foundProduct) {
      // Navigate to the product card component with the product ID
      navigate(`/product/${foundProduct.id}`);
    } else {
      // Optionally handle case when no product is found
      alert("No product found with that name");
    }
  };

  return (
    <div className="flex flex-col py-12 border-l-2">
      <div className="flex flex-col border-r-[1px] border-gray-400 px-24">
        <form onSubmit={handleSearch} className="flex flex-row mb-10 gap-3">
          <input
            type="text"
            id="simple-search"
            className="w-full p-3 border outline-none"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
            required
          />
          <button
            type="submit"
            className="p-3 py-4 text-white bg-[#518832] rounded-md hover:bg-[#6fa74e] hover:text-black"
          >
            <FaChevronRight />
          </button>
        </form>

        <div className="flex flex-col">
          <h2 className="text-base text-[#8BC34A] hover:text-[#6A9745] transition-colors duration-300 cursor-pointer pb-5">
            Groceries <span className="text-black opacity-85">(10)</span>
          </h2>
          <h2 className="text-base text-[#8BC34A] hover:text-[#6A9745] transition-colors duration-300 cursor-pointer pb-7">
            Juice <span className="text-black opacity-85">(9)</span>
          </h2>
        </div>
        <div className="flex items-start justify-start self-start mb-56">
          <ColSales />
        </div>
      </div>
    </div>
  );
}

export default SearchCol;
