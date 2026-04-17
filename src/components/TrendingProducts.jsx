import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

import productsData from '../data/products.json' 

const TrendingProducts = () => {

    const [products, setProducts] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState(8);

    const loadMoreProducts = () => {
        setVisibleProducts((prev) => prev + 4);
    };
    
     useEffect(() => {
            setProducts(productsData);
        }, []);
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto max-w-300 px-4 md:px-6">
                
                {/* Header Section */}
                <div className="text-center md:text-left mb-12">
                    <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-primary-dark mb-4">
                        Trending Products
                    </h2>
                    <div className="h-1 w-20 bg-primary-light mt-1 mx-auto md:mx-0"></div>
                    <p className="font-poppins text-gray-500 text-sm md:text-base max-w-2xl pt-5">
                        Discover the Hottest Picks: Elevate Your style with our Curated Collection of Trending Women's Fashion Products
                    </p>
                </div>

                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                    {products.slice(0, visibleProducts).map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>

                {/* Load More Button Logic */}
                {visibleProducts < products.length && (
                    <div className="flex justify-center mt-12">
                        <button 
                            onClick={loadMoreProducts}
                            className="bg-primary-dark text-white font-poppins font-bold uppercase px-10 py-4 tracking-widest text-xs md:text-sm transition-all duration-300 hover:bg-primary-light shadow-lg active:scale-95 cursor-pointer"
                        >
                            Load More
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default TrendingProducts;
