import { Link, useLocation } from "react-router-dom";

function Pagination() {
  const location = useLocation();
  const isActiveButton1 = location.pathname === "/home/shop/";
  const isActiveButton2 = location.pathname === "/home/shop/page/2";

  return (
    <div className="flex justify-start items-center gap-2 mt-20 mb-20">
      {/* Navigation to Page 1 */}
      <Link to="/home/shop/">
        <button
          className={`px-4 py-2 border border-[#8BC34A] transition-colors duration-300 ${
            isActiveButton1
              ? "bg-[#8BC34A] text-white"
              : "bg-transparent text-[#8BC34A] hover:bg-[#8BC34A] hover:text-white"
          }`}
        >
          1
        </button>
      </Link>

      {/* Navigation to Page 2 */}
      <Link to="/home/shop/page/2">
        <button
          className={`px-4 py-2 border border-[#8BC34A] transition-colors duration-300 ${
            isActiveButton2
              ? "bg-[#8BC34A] text-white"
              : "bg-transparent text-[#8BC34A] hover:bg-[#8BC34A] hover:text-white"
          }`}
        >
          2
        </button>
      </Link>

      {/* Previous Button */}
      {isActiveButton2 && (
        <Link to="/home/shop/">
          <button className="px-4 py-2 bg-transparent text-[#8BC34A] border border-[#8BC34A] hover:bg-[#8BC34A] hover:text-white transition-colors duration-300">
            ←
          </button>
        </Link>
      )}

      {/* Next Button */}
      {isActiveButton1 && (
        <Link to="/home/shop/page/2">
          <button className="px-4 py-2 bg-transparent text-[#8BC34A] border border-[#8BC34A] hover:bg-[#8BC34A] hover:text-white transition-colors duration-300">
            →
          </button>
        </Link>
      )}
    </div>
  );
}

export default Pagination;
