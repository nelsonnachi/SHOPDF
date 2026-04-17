import React, { useState } from 'react';
import productData from '../data/products.json';
import ProductCard from './ProductCard'; // Ensure path is correct

const Search = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(productData);

    const handleSearch = () => {
        const query = searchQuery.toLowerCase();
        const filtered = productData.filter((product) => 
            product.name.toLowerCase().includes(query) || 
            product.description.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query)
        );
        setFilteredProducts(filtered);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSearch();
    };

    return (
        <div className="min-h-screen bg-white">
            <section className="py-10 md:py-16">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-8">
                        <h2 className="font-poppins font-semibold text-2xl md:text-4xl text-primary-dark mb-2">
                            Search Products
                        </h2>
                        <div className="h-1 w-16 bg-primary-light mx-auto"></div>
                    </div>

                    <div className="max-w-2xl mx-auto flex flex-col md:flex-row gap-3">
                        <input 
                            type="text" 
                            value={searchQuery} 
                            onChange={(e) => setSearchQuery(e.target.value)} 
                            onKeyDown={handleKeyPress}
                            placeholder='Search for products...'
                            className="w-full px-5 py-3 md:py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-light transition-all font-poppins text-sm md:text-base shadow-sm"
                        />
                        <button 
                            onClick={handleSearch}
                            className="w-full md:w-auto bg-primary-dark text-white px-10 py-3 md:py-4 rounded-xl font-poppins font-bold uppercase text-xs md:text-sm tracking-widest hover:bg-primary-light transition-all active:scale-95 shadow-lg cursor-pointer"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </section>

            {/* Results Grid */}
            <section className="pb-20">
                <div className="container mx-auto max-w-300 px-4 md:px-6">
                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                            {filteredProducts.map((product) => (
                                <ProductCard key={product._id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-gray-50 rounded-3xl">
                            <p className="text-gray-400 font-poppins">No products found matching your search.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Search;
