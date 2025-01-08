function DefaultDropdown() {
  return (
    <select
      className="ml-4 p-2 text-[#666666] rounded bg-transparent appearance-none focus:outline-none"
      style={{
        backgroundImage:
          "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuNzA3MTksNC4yOTI5N0w4LjAwMDAxLDEwLjU4NTNMMTQuMjkyOCw0LjI5Mjk3IiBzdHJva2U9IiMzMzMzMzMiIHN0cm9rZS13aWR0aD0iMiIgLz4KPC9zdmc+Cg==)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 0.5rem center",
      }}
    >
      <option value="default " className="text-[#666666]">
        Default sorting
      </option>
      <option value="popularity" className="text-[#666666]">
        Sort by popularity
      </option>
      <option value="rating" className="text-[#666666]">
        Sort by average rating
      </option>
      <option value="newness" className="text-[#666666]">
        Sort by latest
      </option>
      <option value="priceLowToHigh" className="text-[#666666]">
        Sort by price: low to high
      </option>
      <option value="priceHighToLow" className="text-[#666666]">
        Sort by price: high to low
      </option>
    </select>
  );
}
export default DefaultDropdown;
