import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../data/products.json';
import ProductCard from './ProductCard';

const CategoryPage = () => {
    const { categoryId } = useParams();
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const filtered = productsData.filter(
            (p) => p.category.toLowerCase() === categoryId.toLowerCase()
        );
        setFilteredProducts(filtered);
        window.scrollTo(0, 0); 
    }, [categoryId]);

    const categoryTitle = categoryId
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

        
    return (
        <section className=" bg-white py-10">
            <div className="container mx-auto max-w-300 px-4 md:px-6 ">
                {/* Responsive Header */}
                <div className="mb-10 text-center md:text-left">
                    <h1 className="font-poppins font-semibold text-3xl md:text-4xl text-primary-dark">
                        {categoryTitle}
                    </h1>
                    <div className="h-1 w-20 bg-primary-light mt-2 mx-auto md:mx-0"></div>
                    <p className="text-gray-500 text-sm mt-4">
                        Showing {filteredProducts.length} items for your search.
                    </p>
                </div>
    
                {/* Main Responsive Grid */}
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                        {filteredProducts.map((item) => (
                            <ProductCard key={item.id} product={item} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-2xl">
                        <p className="text-gray-400 font-poppins">No products found in this category.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CategoryPage;
