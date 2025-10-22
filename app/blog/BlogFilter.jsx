import React, { useState } from "react";

const SearchIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    ></path>
  </svg>
);

const allCategories = [
  "All",
  "Trends",
  "Marketing",
  "SEO",
  "Strategy",
  "Design",
  "Technology",
  "Analytics",
  "Sales",
  "Customer Support",
  "Innovation",
  "UX/UI",
  "Growth",
  "Advertising",
  "Content",
];

const MShopBlogFilters = ({
  searchTerm,
  setSearchTerm,
  activeCategory,
  setActiveCategory,
}) => {
  const [showAll, setShowAll] = useState(false);

  // Show first 10 by default, show all when toggled
  const visibleCategories = showAll ? allCategories : allCategories.slice(0, 10);

  // Filtered suggestions for the search
  const filteredSuggestions = allCategories.filter((cat) =>
    cat.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 mb-12">
      {/* Search Bar */}
      <div className="max-w-xl mx-auto mb-8 relative">
        <div className="flex items-center bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-100">
          <input
            type="search"
            placeholder="Search categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 text-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
          />
          <button
            className="bg-amber-600 p-4 text-white hover:bg-amber-700 transition duration-150"
            aria-label="Search"
          >
            <SearchIcon />
          </button>
        </div>

        {/* Suggestion Dropdown */}
        {searchTerm && filteredSuggestions.length > 0 && (
          <ul className="absolute z-10 w-full bg-white shadow-lg border border-gray-200 mt-1 rounded-md max-h-60 overflow-y-auto">
            {filteredSuggestions.map((cat) => (
              <li
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setSearchTerm("");
                }}
                className="px-4 py-2 hover:bg-amber-100 cursor-pointer"
              >
                {cat}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Horizontal Category Filters */}
      <div className="max-w-xl mx-auto">
        <div className="flex items-center gap-3 overflow-x-auto scrollbar-thin scrollbar-thumb-amber-400 scrollbar-track-gray-100 py-2 px-1">
          {visibleCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-5 py-2 text-sm font-semibold rounded-full transition duration-200 shadow-md flex-shrink-0
                ${activeCategory === category
                  ? "bg-amber-600 text-white hover:bg-amber-700"
                  : "bg-white text-gray-700 hover:bg-amber-50 border border-gray-200"
                }
              `}
            >
              {category}
            </button>
          ))}

          {/* Show More / Less */}
          {allCategories.length > 10 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-5 py-2 text-sm font-semibold rounded-full border border-gray-300 bg-gray-50 text-gray-700 hover:bg-gray-100 shadow-md flex-shrink-0 transition"
            >
              {showAll ? "Show Less" : "More"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MShopBlogFilters;
