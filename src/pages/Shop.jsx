import React, { useState, useEffect } from "react";
import productsData from "../data/products.json";
import ProductCard from "../components/ProductCard";
import {
  FiFilter,
  FiX,
  FiSearch,
  FiRefreshCw,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const Shop = () => {
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const categories = [
    "all",
    "hand-bags",
    "jacket",
    "backpacks",
    "belts",
    "ready-to-wear",
  ];
  const colors = [
    "all",
    "black",
    "red",
    "gold",
    "blue",
    "silver",
    "beige",
    "green",
  ];

  const priceRanges = [
    {label: "Under $100", min: 0, max: 100},
    {label: "$100 - $200", min: 100, max: 200},
    {label: "$200 - $300", min: 200, max: 300},
    {label: "$300 - $400", min: 300, max: 400},
    {label: "$400 - $500", min: 400, max: Infinity},
  ]

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedColor, setSelectedColor] = useState("all");
  const [priceRange, setPriceRange] = useState(500);
  const [sortBy, setSortBy] = useState("newest");

  const applyFilters = () => {
    let result = [...productsData];

    if (searchQuery) {
      result = result.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }
    if (selectedCategory !== "all") {
      result = result.filter((product) => product.category === selectedCategory);
    }
    if (selectedColor !== "all") {
      result = result.filter((product) => product.color === selectedColor);
    }
    result = result.filter((product) => {
      return product.price <= priceRange;
    });

    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else {
      result.sort((a, b) => b.id - a.id);
    }

    setFilteredProducts(result);
    setCurrentPage(1); // Reset to first page when filters change
  };

  useEffect(() => {
    applyFilters();
  }, [searchQuery, selectedCategory, selectedColor, priceRange, sortBy]);

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;   
  const currentProducts = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handleRefresh = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedColor("all");
    setPriceRange(500);
    setSortBy("newest");
    setIsFilterOpen(false);
    setCurrentPage(1);
  };

  const handleSearchSubmit = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      setIsFilterOpen(false);
    }
  };

  return (
    <section className="pb-12 md:pb-20 bg-white min-h-screen relative">
      <button
        onClick={() => setIsFilterOpen(true)}
        className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-primary-dark text-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest transition-transform active:scale-95"
      >
        <FiFilter size={16} /> Filter & Sort
      </button>

      <div className="container mx-auto max-w-7xl px-4 md:px-6 ">
        <div className="mb-10 pb-10  border-b border-gray-100 flex justify-between items-end">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-2">
              Shop
            </h2>
            <p className="text-gray-400 text-sm md:text-base italic">
              Home / Collections / {selectedCategory.replace("-", " ")}
            </p>
          </div>
          <button
            onClick={handleRefresh}
            title="Reset all filters"
            className="p-3 bg-gray-50 text-gray-400 hover:text-black hover:bg-gray-100 rounded-full transition-all duration-300 group"
          >
            <FiRefreshCw
              size={20}
              className="group-active:rotate-180 transition-transform duration-500"
            />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <aside className="hidden lg:block lg:w-1/4 h-fit sticky top-28 space-y-10">
            <div>
              <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                Search
              </label>
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for products..."
                  className="w-full bg-gray-50 pl-10 pr-4 py-3 rounded-xl text-sm outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                Category
              </label>
              <div className="flex flex-col gap-1">
                {categories.map((cat) => (
                  <button
                    key={cat}   
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-left px-4 py-2 rounded-lg text-sm capitalize transition-all ${selectedCategory === cat ? "bg-black text-white" : "text-gray-500 hover:bg-gray-100"}`}
                  >
                    {cat.replace("-", " ")}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                Color Palette
              </label>
              <div className="flex flex-wrap gap-3">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-7 h-7 rounded-full border border-gray-200 transition-all ${selectedColor === color ? "ring-2 ring-black ring-offset-2 scale-110" : "hover:scale-110"}`}
                    style={{
                      backgroundColor: color === "all" ? "#f3f4f6" : color,
                    }}
                  />
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-3">
                <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                  Price
                </label>
                <span className="text-sm font-bold text-black">
                  ${priceRange}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="500"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full h-1 bg-gray-200 rounded-lg appearance-none accent-black cursor-pointer"
              />
            </div>

            <button
              onClick={handleRefresh}
              className="w-full py-4 text-[10px] font-bold uppercase tracking-widest text-red-500 border border-red-50 rounded-xl hover:bg-red-50"
            >
              Reset Filters
            </button>
          </aside>

          <main className="flex-1">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100">
              <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                {filteredProducts.length} items found
              </span>
              <div className="flex items-center gap-3">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Sort By:
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent text-[10px] font-bold uppercase tracking-widest outline-none cursor-pointer"
                >
                  <option value="newest">Latest Arrivals</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Grid uses currentProducts for pagination */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-8">
              {currentProducts.map((item) => (
                <ProductCard key={item._id} product={item} />
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-16 space-x-2">
                <button
                  disabled={currentPage === 1}
                  onClick={() => {
                    setCurrentPage(currentPage - 1);
                    window.scrollTo(0, 0);
                  }}
                  className="p-2 border border-gray-200 rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-all"
                >
                  <FiChevronLeft size={18} />
                </button>

                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => {
                      setCurrentPage(i + 1);
                      window.scrollTo(0, 0);
                    }}
                    className={`w-10 h-10 rounded-full text-xs font-bold transition-all ${currentPage === i + 1 ? "bg-black text-white shadow-lg" : "text-gray-400 hover:text-black hover:bg-gray-50"}`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => {
                    setCurrentPage(currentPage + 1);
                    window.scrollTo(0, 0);
                  }}
                  className="p-2 border border-gray-200 rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-all"
                >
                  <FiChevronRight size={18} />
                </button>
              </div>
            )}

            {filteredProducts.length === 0 && (
              <div className="py-20 text-center">
                <p className="text-gray-400 italic">
                  No products matched your criteria.
                </p>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity ${isFilterOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsFilterOpen(false)}
      >
        <div
          className={`fixed top-0 left-0 h-full w-[85%] max-w-sm bg-white p-8 overflow-y-auto transition-transform duration-300 ${isFilterOpen ? "translate-x-0" : "-translate-x-full"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-10">
            <span className="font-bold uppercase tracking-widest text-sm">
              Filters
            </span>
            <button onClick={() => setIsFilterOpen(false)}>
              <FiX size={24} />
            </button>
          </div>

          <div className="space-y-10">
            <div>
              <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                Search
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleSearchSubmit}
                    placeholder="Search..."
                    className="w-full bg-gray-50 pl-10 pr-4 py-3 rounded-xl text-sm outline-none"
                  />
                </div>
                <button
                  onClick={handleSearchSubmit}
                  className="bg-black text-white px-4 py-3 rounded-xl text-xs font-bold uppercase"
                >
                  Go
                </button>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                Category
              </label>
              <div className="flex flex-col gap-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setIsFilterOpen(false);
                    }}
                    className={`text-left px-4 py-2 rounded-lg text-sm capitalize ${selectedCategory === cat ? "bg-black text-white" : "text-gray-500"}`}
                  >
                    {cat.replace("-", " ")}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                Color Palette
              </label>
              <div className="flex flex-wrap gap-3">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => {
                      setSelectedColor(color);
                      setIsFilterOpen(false);
                    }}
                    className={`w-8 h-8 rounded-full border border-gray-100 ${selectedColor === color ? "ring-2 ring-black ring-offset-2" : ""}`}
                    style={{
                      backgroundColor: color === "all" ? "#f3f4f6" : color,
                    }}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={handleRefresh}
              className="w-full py-4 text-xs font-bold uppercase tracking-widest bg-red-500 text-white border border-red-50 rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
